
/* Address: 0x180014ced; Evidence: ev_a67a576ac6aac63d8398832fdca065dee87a157aa092859a74d31b55ebe9d53c */

undefined4 FUN_180014ced(undefined8 param_1,longlong param_2)

{
  _xDISPATCHER_CONTEXT *p_Var1;
  undefined8 uVar2;
  longlong lVar3;
  
  *(undefined8 *)(param_2 + 0x48) = param_1;
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x70) = *(undefined8 *)(param_2 + 0x70);
  p_Var1 = *(_xDISPATCHER_CONTEXT **)(param_2 + 0x88);
  uVar2 = *(undefined8 *)(p_Var1 + 8);
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x60) = uVar2;
  uVar2 = *(undefined8 *)(**(longlong **)(param_2 + 0x48) + 0x38);
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x68) = uVar2;
  lVar3 = FUN_180007158();
  *(undefined4 *)(lVar3 + 0x78) = *(undefined4 *)(param_2 + 0xa8);
  FUN_1800092dc((int *)**(undefined8 **)(param_2 + 0x48),*(__uint64 **)(param_2 + 0x78),
                *(ULONG_PTR *)(param_2 + 0x80),p_Var1,*(FuncInfo4 **)(param_2 + 0x90),0,0,1);
  lVar3 = FUN_180007158();
  *(undefined8 *)(lVar3 + 0x70) = 0;
  *(undefined4 *)(param_2 + 0x40) = 1;
  *(undefined4 *)(param_2 + 0x44) = 1;
  return *(undefined4 *)(param_2 + 0x44);
}

