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

      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="admin in admins" :key="admin.id">
          <td class="px-6 py-3 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <img
                :src="admin.avatar"
                class="w-10 h-10 rounded-full"
                alt="Admin avatar"
              />
              <div class="font-medium text-black">{{ admin.name }}</div>
            </div>
          </td>

          <td class="px-6 py-3 whitespace-nowrap text-light-black">
            {{ matchRole(admin.role) }}
          </td>

          <td class="px-6 py-3 whitespace-nowrap text-light-black">
            {{ admin.joinedDate }} • {{ admin.joinedTime }}
          </td>

          <td
            class="!py-0 text-right text-sm"
            v-if="admin.role !== 'super-admin'"
          >
            <div
              class="flex justify-end space-x-4 px-6"
              v-if="editingAdminId !== admin.id"
            >
              <span
                role="button"
                class="text-green cursor-pointer select-none"
                @click="startEditing(admin.id, admin.role)"
              >
                Change Role
              </span>
              <span
                role="button"
                class="text-red cursor-pointer select-none"
                @click="$emit('remove', admin)"
              >
                Remove
              </span>
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
              >
                Change Role
              </AppButton>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from "vue"
  import AppButton from "../AppButton"
  import { AppDropdown } from "../AppForm"

  type AdminRole = "super-admin" | "admin" | "moderator" | "user" | null

  interface Admin {
    id: number
    name: string
    avatar: string
    role: AdminRole
    joinedDate: string
    joinedTime: string
  }
  interface RoleOption {
    label: string
    value: AdminRole
  }

  export default defineComponent({
    name: "AppAdminTable",
    components: { AppButton, AppDropdown },
    props: {
      admins: {
        type: Array as PropType<Admin[]>,
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
      const editingAdminId = ref<number | null>(2)
      const selectedRole = ref<AdminRole>(null)

      const roleOptions: RoleOption[] = [
        { label: "Super Admin", value: "super-admin" },
        { label: "Admin", value: "admin" },
        { label: "Moderator", value: "moderator" },
        { label: "User", value: "user" },
      ]

      const matchRole = (role_id: AdminRole): string => {
        const match = roleOptions.find((option) => option.value === role_id)
        return match?.label || ""
      }

      const startEditing = (adminId: number, currentRole: AdminRole) => {
        editingAdminId.value = adminId
        selectedRole.value = currentRole
      }

      const confirmRoleChange = (admin: Admin) => {
        if (selectedRole.value && selectedRole.value !== admin.role) {
          emit("change-role", { ...admin, newRole: selectedRole.value })
        }
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
