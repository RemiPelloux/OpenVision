
/* Address: 0x180010bf0; Evidence: ev_1c874b54265fc8c8458cc64484f23daf11c0234e047dd75a2bba1b00ca2c36ab */

void FUN_180010bf0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_18000f530(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_180011470(lVar1,param_1 + 3,param_1[1]);
  FUN_1800114dc(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}

