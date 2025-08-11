<template>
  <div class="relative h-fit">
    <div
      role="button"
      @click="isOpen = !isOpen"
      aria-haspopup="listbox"
      aria-expanded="true"
      aria-labelledby="listbox-label"
      class="w-32 !border-[2px] bg-white rounded-full cursor-pointer select-none py-2 px-3 flex items-center justify-between sm:text-sm/6"
      :class="customClass"
    >
      <app-loading :loading="loading" />

      <div class="flex items-center flex-1">
        <template v-if="showCurrencyImage">
          <app-image-loader
            :photo-url="`/images/icons/flags/${selectedCurrency.code.toLocaleLowerCase()}.${
              selectedCurrency?.icon_extension || 'svg'
            }`"
            class="h-6 w-6 rounded-full mr-2"
          />
        </template>

        <span>
          {{ selectedCurrency?.code || placeholder }}
        </span>
      </div>

      <app-icon name="arrow-down" custom-class="h-4" />
    </div>

    <ul
      v-if="isOpen"
      class="absolute right-0 z-[11] -mt-0.5 max-h-60 no-scrollbar w-full overflow-auto rounded-md bg-white py-1 text-base box-shadow ring-1 ring-black/5 sm:text-sm"
      tabindex="-1"
      role="listbox"
      aria-labelledby="listbox-label"
      aria-activedescendant="listbox-option-3"
    >
      <li
        v-for="(currency, index) in currencies"
        :key="index"
        @click="selectCurrency(currency)"
        class="px-2 py-2 cursor-pointer hover:bg-gray-50 text-sm"
      >
        <div class="flex items-center">
          <template v-if="showCurrencyImage">
            <app-image-loader
              :photo-url="`/images/icons/flags/${currency.code.toLocaleLowerCase()}.${
                currency?.icon_extension || 'svg'
              }`"
              class="h-6 w-6 rounded-full mr-2"
            />
          </template>

          <app-normal-text
            :class="
              selectedCurrency?.code === currency.code
                ? '!font-bold !text-black'
                : '!font-medium text-light-black'
            "
          >
            {{ `${currency.symbol} ${currency.code}` }}
          </app-normal-text>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch, PropType, computed, toRef } from "vue"
  import AppIcon from "../AppIcon"
  import AppLoading from "../AppLoading"
  import { Currency } from "../../types"
  import AppImageLoader from "../AppImageLoader"

  export default defineComponent({
    name: "CustomDropdown",
    components: { AppIcon, AppLoading, AppImageLoader },
    props: {
      default_currency: {
        type: String,
        required: true,
        default: "",
      },
      modelValue: {
        type: String,
        default: "USD",
      },
      modelSymbol: {
        type: String,
        default: "USD",
      },
      placeholder: {
        type: String,
        default: "USD",
      },
      customClass: {
        type: String,
        default: "",
      },
      loading: {
        type: Boolean,
        default: false,
      },
      showIcon: {
        type: Boolean,
        default: true,
      },
      currencies: {
        type: Array as () => Currency[],
        default: () => [
          {
            code: "TRY",
            name: "Turkish Lira",
            symbol: "₺",
            loading: false,
          },
          {
            code: "USD",
            name: "United States Dollar",
            symbol: "$",
            loading: false,
          },
          {
            code: "USDC",
            name: "USDC",
            symbol: "$",
            loading: false,
          },
          {
            code: "NGN",
            name: "Nigerian Naira",
            symbol: "₦",
            loading: false,
          },
          {
            code: "GHS",
            name: "Ghanaian Cedis",
            symbol: "GH₵",
            loading: false,
          },
          {
            code: "XLM",
            name: "XLM",
            symbol: "XLM",
            loading: false,
          },
          {
            code: "ZAR",
            name: "South African Rand",
            symbol: "R",
            loading: false,
          },
          {
            code: "EUR",
            name: "Euro",
            symbol: "€",
            loading: false,
          },
        ],
      },
    },
    emits: ["update:modelValue", "update:modelSymbol", "change"],
    setup(props, { emit }) {
      const isOpen = ref(false)
      const showCurrencyImage = ref(props.showIcon)

      const defaultCurrencyRef = toRef(props, "default_currency")
      const defaultCurrency = computed<Currency>(() => {
        return props.currencies.find(
          (currency) => currency.code === defaultCurrencyRef.value
        )!
      })
      const selectedCurrency = ref<Currency>({
        code: props.modelValue,
        symbol: props.modelSymbol,
        name: defaultCurrency.value?.name,
      })

      //  showIcon
      watch(selectedCurrency, (newCurrency) => {
        showCurrencyImage.value = false
        emit("update:modelValue", newCurrency.code)
        emit("update:modelSymbol", newCurrency.symbol)
        setTimeout(() => {
          if (props.showIcon) showCurrencyImage.value = true
        }, 100)
      })

      const selectCurrency = (currency: Currency) => {
        currency.loading = true
        if (currency.code == selectedCurrency.value.code) return
        selectedCurrency.value = currency
        currency.loading = false

        isOpen.value = false
      }

      return {
        isOpen,
        selectedCurrency,
        showCurrencyImage,
        selectCurrency,
      }
    },
  })
</script>

<style scoped>
  button:focus {
    outline: none;
    box-shadow: none;
  }
</style>
