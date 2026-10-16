
/* Address: 0x18000c644; Evidence: ev_b4b77322e1f1b5a33dfa6d77002599485c72c024b31077a581b23dcb784c1095 */

int FUN_18000c644(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_18001aab8; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_18001aac0 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18000ca7c(*(int **)(DAT_18001aac0 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_18001aac0 + lVar4 * 8) + 0x30));
      FUN_180006a30(*(LPVOID *)(DAT_18001aac0 + lVar4 * 8));
      *(undefined8 *)(DAT_18001aac0 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}

