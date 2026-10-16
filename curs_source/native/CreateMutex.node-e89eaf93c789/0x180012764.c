
/* Address: 0x180012764; Evidence: ev_e24acf128c75b8bc0c3055ae13b9d84e369432338c40c7b449ca1a7464ad0b03 */

int FUN_180012764(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_180023c20; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_180023c28 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_180012b9c(*(int **)(DAT_180023c28 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_180023c28 + lVar4 * 8) + 0x30));
      FUN_18000cbe0(*(LPVOID *)(DAT_180023c28 + lVar4 * 8));
      *(undefined8 *)(DAT_180023c28 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}

