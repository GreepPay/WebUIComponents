<template>
  <div
    id="admin-table"
    :class="`${customClass} blend-in  bg-white box-shadow`"
    :style="customStyle"
  >
    <table class="min-w-full divide-y divide-gray-200">
      <colgroup>
        <col class="w-[50%]" />
        <col class="w-[15%]" />
        <col class="w-[15%]" />
        <col class="w-[20%]" />
      </colgroup>

      <thead class="bg-white">
        <tr>
          <th class="px-6 py-3 text-left font-medium text-light-black">Name</th>
          <th class="px-6 py-3 text-left font-medium text-light-black">Role</th>
          <th class="px-6 py-3 text-left font-medium text-light-black">
            Became Admin
          </th>
          <th class="px-6 py-3 text-right font-medium text-light-black">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="bg- white divide-y divide-gray-200">
        <tr
          v-if="admins && admins.length"
          v-for="(admin, index) in admins"
          :key="admin.auth_user_id"
          :class="
            index % 2 !== 0 ? 'bg-light-gray-one bg-opacity-[25%]' : 'bg-white'
          "
        >
          <td class="px-6 py-3 whitespace-nowrap bg-">
            <div class="flex items-center space-x-3">
              <app-avatar
                :src="admin?.user?.profile?.profile_picture || ''"
                :name="`${admin?.user?.first_name} ${admin?.user?.last_name}`"
                class="w-10 h-10 rounded-full"
                alt="Admin avatar"
              />
              <div class="font-medium text-black">
                {{ `${admin?.user?.first_name} ${admin?.user?.last_name}` }}
              </div>
            </div>
          </td>

          <td class="px-6 py-3 whitespace-nowrap text-light-black">
            {{ admin?.user?.role?.name }}
          </td>

          <td class="px-6 py-3 whitespace-nowrap text-light-black">
            {{ admin.updated_at.split(" ")[0] }}
            • {{ admin.updated_at.split(" ")[1] }}
          </td>

          <td class="!py-0 text-right text-sm">
            <div v-if="admin.user?.role?.name !== 'SuperAdmin'">
              <div
                class="flex justify-end space-x-4 px-6"
                v-if="editingAdminId !== admin.user?.uuid"
              >
                <span
                  role="button"
                  class="text-green cursor-pointer select-none"
                  @click="
                    startEditing(admin?.user?.uuid, admin.user?.role?.name)
                  "
                >
                  Change Role
                </span>
                <!-- <span
                role="button"
                class="text-red cursor-pointer select-none"
                @click="$emit('remove', admin)"
              >
                Remove
              </span> -->
              </div>

              <!-- Role change UI -->
              <div
                v-else
                class="flex-1 flex items-center justify-end gap-2 !h-full"
              >
                <AppDropdown
                  v-model="selectedRole"
                  :options="roleOptions"
                  placeholder="Assign role"
                />
                <AppButton
                  variant="primary"
                  customClass="!py-4.5 !w-fit !rounded-none"
                  @click="confirmRoleChange(admin)"
                  :disabled="selectedRole === admin.user?.role?.name"
                >
                  Change Role
                </AppButton>
              </div>
            </div>
          </td>
        </tr>

        <tr v-else>
          <td
            colspan="3"
            class="px-6 py-4 text-black text-center font-semibold"
          >
            <app-empty-state
              title="No admins"
              description="No admins available "
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from "vue"
  import AppButton from "../AppButton"
  import AppAvatar from "../AppAvatar"
  import AppEmptyState from "../AppEmptyState"
  import { AppDropdown } from "../AppForm"
  import { Profile } from "@greep/logic/src/gql/graphql"

  interface RoleOption {
    label: string
    value: string
  }

  export default defineComponent({
    name: "AppAdminTable",
    components: { AppButton, AppDropdown, AppAvatar, AppEmptyState },
    props: {
      admins: {
        type: Array as PropType<Profile[]>,
        required: true,
      },
      customClass: {
        type: String,
        default: "",
      },
      customStyle: {
        type: String,
        default: "",
      },
    },
    emits: ["change-role", "remove"],
    setup(_, { emit }) {
      const editingAdminId = ref<string | null>("")
      const selectedRole = ref<string>(null)

      const roleOptions: RoleOption[] = [
        { label: "Super Admin", value: "SuperAdmin" },
        { label: "Admin", value: "Admin" },
      ]

      const matchRole = (role_id: string): string => {
        const match = roleOptions.find((option) => option.value === role_id)
        return match?.label || ""
      }

      const startEditing = (adminId: string, currentRole: string) => {
        editingAdminId.value = adminId
        selectedRole.value = currentRole
      }

      const confirmRoleChange = (admin: any) => {
        emit("change-role", {
          uuid: admin?.user?.uuid,
          role: selectedRole.value,
        })

        editingAdminId.value = null
      }

      return {
        roleOptions,
        editingAdminId,
        selectedRole,
        matchRole,
        startEditing,
        confirmRoleChange,
      }
    },
  })
</script>

<style scoped>
  .blend-in {
    animation: fadein 0.15s;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
