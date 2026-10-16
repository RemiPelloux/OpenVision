
/* Address: 0x18000b774; Evidence: ev_696331352b01c41c23ef1890150755df064d26a6840aba89cce0affb3429f812 */

undefined8 FUN_18000b774(uint param_1)

{
  int iVar1;
  ulonglong uVar2;
  undefined4 *puVar3;
  __acrt_ptd *p_Var4;
  DWORD nStdHandle;
  
  if ((-1 < (int)param_1) && (param_1 < DAT_18001aa80)) {
    uVar2 = (ulonglong)(param_1 & 0x3f);
    if (((*(byte *)((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x38 + uVar2 * 0x48)
         & 1) != 0) &&
       (*(longlong *)
         ((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) != -1)) {
      iVar1 = FUN_18000c858();
      if (iVar1 == 1) {
        if (param_1 == 0) {
          nStdHandle = 0xfffffff6;
        }
        else if (param_1 == 1) {
          nStdHandle = 0xfffffff5;
        }
        else {
          if (param_1 != 2) goto LAB_18000b7f4;
          nStdHandle = 0xfffffff4;
        }
        SetStdHandle(nStdHandle,(HANDLE)0x0);
      }
LAB_18000b7f4:
      *(undefined8 *)
       ((&DAT_18001a680)[(ulonglong)(longlong)(int)param_1 >> 6] + 0x28 + uVar2 * 0x48) =
           0xffffffffffffffff;
      return 0;
    }
  }
  puVar3 = (undefined4 *)FUN_180006080();
  *puVar3 = 9;
  p_Var4 = FUN_18000605c();
  *(undefined4 *)p_Var4 = 0;
  return 0xffffffff;
}

