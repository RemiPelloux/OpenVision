
/* Address: 0x18000c764; Evidence: ev_07beb82fcacadad202f4435155e880daea6ecf642f9bf0793125921ea8107e3f */

int FUN_18000c764(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_18001bab8; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_18001bac0 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18000cb9c(*(int **)(DAT_18001bac0 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_18001bac0 + lVar4 * 8) + 0x30));
      FUN_180006b50(*(LPVOID *)(DAT_18001bac0 + lVar4 * 8));
      *(undefined8 *)(DAT_18001bac0 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}

