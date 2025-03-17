<template>
  <div
    class="w-fit p-2 px-3 bg-white rounded-[999px] flex flex-row space-x-[6px] items-center"
    @click="showSelectModal = true"
  >
    <app-image-loader
      :photo-url="`/images/icons/flags/${selectedCurrency.code.toLocaleLowerCase()}.svg`"
      class="h-[32px] w-[32px] rounded-full"
      v-if="showCurrencyImage"
    />
    <div class="h-[32px] w-[32px] rounded-full" v-else></div>
    <div class="h-[32px] flex justify-center items-center">
      <app-icon :name="`chevron-down`" custom-class="h-[8px]" />
    </div>
  </div>

  <app-modal
    :canClose="true"
    custom-class="mdlg:hidden!"
    :close="
      () => {
        showSelectModal = false;
      }
    "
    v-if="showSelectModal"
  >
    <div
      @click.stop="true"
      class="rounded-t-2xl flex flex-col space-y-2 bg-white w-full absolute overflow-y-auto h-[400px] bottom-0 left-0 pb-3 px-3 lg:text-sm! mdlg:text-[12px]! text-xs"
    >
      <div
        class="flex items-center justify-center sticky top-0 bg-white w-full pt-3"
      >
        <span class="bg-gray-700 rounded-full w-[30px] h-[4px]"></span>
      </div>

      <div class="w-full flex flex-col space-y-2">
        <div class="w-full flex flex-row items-center justify-between">
          <app-normal-text class="font-semibold text-gray-600"
            >Default</app-normal-text
          >

          <app-normal-text class="font-semibold text-primary"
            >Change</app-normal-text
          >
        </div>

        <div
          @click="selectCurrency(defaultCurrency)"
          :class="`w-full px-2 py-2 ${
            currencyIsSelected(defaultCurrency)
              ? 'border-[1px] border-[#0A141E] rounded-[999px]'
              : 'border-[1px] border-transparent'
          }  flex flex-row space-x-3 items-center`"
        >
          <app-image-loader
            :photo-url="`/images/icons/flags/${defaultCurrency.code.toLocaleLowerCase()}.svg`"
            class="h-[32px] w-[32px] rounded-full"
          />

          <app-normal-text
            :class="`!text-left ${
              currencyIsSelected(defaultCurrency) ? 'font-semibold' : ''
            }`"
            >{{ defaultCurrency.name }} ({{
              defaultCurrency.symbol
            }})</app-normal-text
          >
        </div>
      </div>

      <div class="w-full flex flex-col space-y-2">
        <div class="w-full flex flex-row items-center justify-between">
          <app-normal-text class="font-semibold text-gray-600"
            >Others</app-normal-text
          >
        </div>

        <div
          v-for="(currency, index) in availableCurrencies.filter(
            (currency) => currency.code !== defaultCurrency.code
          )"
          :key="index"
          :class="`w-full px-2 py-2 ${
            currencyIsSelected(currency)
              ? 'border-[1px] border-[#0A141E] rounded-[999px]'
              : 'border-[1px] border-transparent'
          }  flex flex-row space-x-3 items-center`"
          @click="selectCurrency(currency)"
        >
          <app-image-loader
            :photo-url="`/images/icons/flags/${currency.code.toLocaleLowerCase()}.svg`"
            class="h-[32px] w-[32px] rounded-full"
          />

          <app-normal-text
            :class="`!text-left ${
              currencyIsSelected(currency) ? 'font-semibold' : ''
            }`"
            >{{ currency.name }} ({{ currency.symbol }})</app-normal-text
          >
        </div>
      </div>
    </div>
  </app-modal>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "vue";
import { AppNormalText, AppHeaderText } from "../AppTypography";
import AppImageLoader from "../AppImageLoader";
import AppIcon from "../AppIcon";
import AppModal from "../AppModal";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export default defineComponent({
  name: "AppCurrencySwitch",
  components: {
    AppNormalText,
    AppHeaderText,
    AppImageLoader,
    AppIcon,
    AppModal,
  },
  props: {
    default_currency: {
      type: String,
      required: true,
      default: "USD",
    },
    modelValue: {
      type: String,
      required: true,
      default: "USD",
    },
    modelSymbol: {
      type: String,
      required: false,
      default: "$", // Default to USD symbol
    },
  },
  emits: ["update:modelValue", "update:modelSymbol"],
  setup(props, context) {
    const availableCurrencies = reactive<Currency[]>([
      {
        code: "TRY",
        name: "Turkish Lira",
        symbol: "₺",
      },
      {
        code: "USD",
        name: "United States Dollar",
        symbol: "$",
      },
      {
        code: "USDC",
        name: "USDC",
        symbol: "$",
      },
      {
        code: "NGN",
        name: "Nigerian Naira",
        symbol: "₦",
      },
      {
        code: "GHS",
        name: "Ghanaian Cedis",
        symbol: "GH₵",
      },
      {
        code: "XLM",
        name: "XLM",
        symbol: "XLM", // Or any appropriate symbol
      },
      {
        code: "ZAR",
        name: "South African Rand",
        symbol: "R",
      },
      {
        code: "EUR",
        name: "Euro",
        symbol: "€",
      },
    ]);

    const defaultCurrency = computed<Currency>(() => {
      return availableCurrencies.find(
        (currency) => currency.code === props.default_currency
      )!; // Non-null assertion since prop is required
    });

    const selectedCurrency = ref<Currency>({
      code: props.modelValue,
      symbol: props.modelSymbol,
      name: defaultCurrency.value.name,
    });

    const showCurrencyImage = ref(true);

    const showSelectModal = ref(false);

    const currencyIsSelected = (currency: Currency) => {
      return currency.code === selectedCurrency.value.code;
    };

    const selectCurrency = (currency: Currency) => {
      selectedCurrency.value = currency;
      showSelectModal.value = false;
    };

    watch(selectedCurrency, (newCurrency) => {
      showCurrencyImage.value = false;
      context.emit("update:modelValue", newCurrency.code);
      context.emit("update:modelSymbol", newCurrency.symbol);
      setTimeout(() => {
        showCurrencyImage.value = true;
      }, 100);
    });

    return {
      availableCurrencies,
      selectedCurrency,
      showSelectModal,
      defaultCurrency,
      currencyIsSelected,
      showCurrencyImage,
      selectCurrency,
    };
  },
});
</script>
