
/* Address: 0x1800187c4; Evidence: ev_565db56a2bcaf2744316c40cc23171890a64941cd105ec1c17bc3a77b7d79582 */

undefined4 FUN_1800187c4(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180005a98();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180005a98();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180005a98();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  thunk_FUN_180007250((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                      *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(_s_FuncInfo **)(param_2 + 0x90),0,0,1)
  ;
  lVar3 = FUN_180005a98();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}

