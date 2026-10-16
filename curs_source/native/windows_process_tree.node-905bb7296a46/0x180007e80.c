
/* Address: 0x180007e80; Evidence: ev_3d9c785b66c30fa785c64235cc25726e56bb7dbc17b27c173f4741479833cbe2 */

void FUN_180007e80(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

{
  undefined8 uVar1;
  longlong lVar2;
  __uint64 local_res8;
  FuncInfo4 local_28 [4];
  undefined8 local_24;
  undefined8 local_1c;
  undefined4 local_14;
  
  uVar1 = *(undefined8 *)(param_4 + 8);
  local_28[0] = (FuncInfo4)0x0;
  local_24 = 0;
  local_1c = 0;
  local_14 = 0;
  local_res8 = param_2;
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180008548();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180008548();
  FUN_180007340((byte *)((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),
                (byte *)local_28,*(longlong *)(param_4 + 8),**(int **)(param_4 + 0x10),'\0');
  FUN_18000a6cc(param_1,&local_res8,param_3,param_4,local_28,0,0,0);
  return;
}

