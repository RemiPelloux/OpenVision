
/* Address: 0x180013b54; Evidence: ev_87d7fea5d408d988d1e4937a2d88ab1581260dc2e8c32c344fc5b9e439b007b9 */

int FUN_180013b54(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_180024c20; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_180024c28 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_180013f8c(*(int **)(DAT_180024c28 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_180024c28 + lVar4 * 8) + 0x30));
      FUN_18000dfd0(*(LPVOID *)(DAT_180024c28 + lVar4 * 8));
      *(undefined8 *)(DAT_180024c28 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}

