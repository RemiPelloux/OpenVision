
/* Address: 0x1800124e4; Evidence: ev_a61fe774aa4c4c4414a5160bdbcd9e5408b7c77400282d2ab0b2fec0ed62ce87 */

int FUN_1800124e4(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_180022c20; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_180022c28 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18001291c(*(int **)(DAT_180022c28 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_180022c28 + lVar4 * 8) + 0x30));
      FUN_18000c960(*(LPVOID *)(DAT_180022c28 + lVar4 * 8));
      *(undefined8 *)(DAT_180022c28 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}

