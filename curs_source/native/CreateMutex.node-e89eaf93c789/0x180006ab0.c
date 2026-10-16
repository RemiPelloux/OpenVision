
/* Address: 0x180006ab0; Evidence: ev_9772b218a085cf7be40c2a88fcb2196562386a4ff99f50be863b2249bf1328ed */

void FUN_180006ab0(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

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
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_180007158();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_180007158();
  FUN_180005f70((byte *)((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),
                (byte *)local_28,*(longlong *)(param_4 + 8),**(int **)(param_4 + 0x10),'\0');
  FUN_1800092dc(param_1,&local_res8,param_3,param_4,local_28,0,0,0);
  return;
}

