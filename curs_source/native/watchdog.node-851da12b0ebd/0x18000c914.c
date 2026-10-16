
/* Address: 0x18000c914; Evidence: ev_ed8fcf0c083890648237e411c7821d0dee44b204d93b2bf772d88a0e82b91fd5 */

int FUN_18000c914(void)

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
         (uVar2 = FUN_18000cd4c(*(int **)(DAT_18001bac0 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_18001bac0 + lVar4 * 8) + 0x30));
      FUN_180006d00(*(LPVOID *)(DAT_18001bac0 + lVar4 * 8));
      *(undefined8 *)(DAT_18001bac0 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}

