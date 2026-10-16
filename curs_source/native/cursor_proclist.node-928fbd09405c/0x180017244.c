
/* Address: 0x180017244; Evidence: ev_66652de63cdc4603f9bd19021b145d6fb2fc10d71ca9e8534141e12a2209e200 */

int FUN_180017244(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_180029d50; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_180029d58 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18001767c(*(int **)(DAT_180029d58 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_180029d58 + lVar4 * 8) + 0x30));
      FUN_1800116e0(*(LPVOID *)(DAT_180029d58 + lVar4 * 8));
      *(undefined8 *)(DAT_180029d58 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}

