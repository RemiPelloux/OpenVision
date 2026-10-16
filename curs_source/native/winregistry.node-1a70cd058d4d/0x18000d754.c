
/* Address: 0x18000d754; Evidence: ev_98e5c7a1bfd6b981a5361544161587101471121d3d27758f2f738537e40ff4e3 */

int FUN_18000d754(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_18001cb80; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_18001cb88 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_18000db8c(*(int **)(DAT_18001cb88 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_18001cb88 + lVar4 * 8) + 0x30));
      FUN_180007bd0(*(LPVOID *)(DAT_18001cb88 + lVar4 * 8));
      *(undefined8 *)(DAT_18001cb88 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}

