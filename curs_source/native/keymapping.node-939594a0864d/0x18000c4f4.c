
/* Address: 0x18000c4f4; Evidence: ev_baad46507679786832fe2be83959b008c104efcc46efa470f025bf46f1de7e36 */

int FUN_18000c4f4(void)

{
  longlong lVar1;
  ulonglong uVar2;
  int iVar3;
  longlong lVar4;
  int local_18;
  
  local_18 = 0;
  __acrt_lock(8);
  for (iVar3 = 3; iVar3 != DAT_1800282b0; iVar3 = iVar3 + 1) {
    lVar4 = (longlong)iVar3;
    lVar1 = *(longlong *)(DAT_1800282b8 + lVar4 * 8);
    if (lVar1 != 0) {
      if (((*(uint *)(lVar1 + 0x14) >> 0xd & 1) != 0) &&
         (uVar2 = FUN_180011398(*(FILE **)(DAT_1800282b8 + lVar4 * 8)), (int)uVar2 != -1)) {
        local_18 = local_18 + 1;
      }
      DeleteCriticalSection((LPCRITICAL_SECTION)(*(longlong *)(DAT_1800282b8 + lVar4 * 8) + 0x30));
      FUN_18000bff0(*(LPVOID *)(DAT_1800282b8 + lVar4 * 8));
      *(undefined8 *)(DAT_1800282b8 + lVar4 * 8) = 0;
    }
  }
  __acrt_unlock(8);
  return local_18;
}

