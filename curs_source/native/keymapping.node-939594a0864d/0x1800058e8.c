
/* Address: 0x1800058e8; Evidence: ev_b9c722a92e7491fb1d43ac911c9525abe9dcdee35b684fa20a22aa07937a80c2 */

longlong FUN_1800058e8(longlong param_1,int *param_2)

{
  int iVar1;
  longlong lVar2;
  
  iVar1 = param_2[1];
  lVar2 = *param_2 + param_1;
  if (-1 < iVar1) {
    lVar2 = lVar2 + (longlong)*(int *)((longlong)param_2[2] + *(longlong *)(iVar1 + param_1)) +
                    (longlong)iVar1;
  }
  return lVar2;
}

