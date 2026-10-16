
/* Address: 0x18000b3fc; Evidence: ev_ca655a5055409ef2b7890ec69c9a395d6965142a35a55d8bc4a8e856a90dde05 */

void FUN_18000b3fc(int *param_1,__uint64 param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4)

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
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x60) = uVar1;
  uVar1 = *(undefined8 *)(param_1 + 0xe);
  lVar2 = FUN_18000babc();
  *(undefined8 *)(lVar2 + 0x68) = uVar1;
  lVar2 = FUN_18000babc();
  FUN_18000a8c0((byte *)((ulonglong)**(uint **)(param_4 + 0x38) + *(longlong *)(lVar2 + 0x60)),
                (byte *)local_28,*(longlong *)(param_4 + 8),**(int **)(param_4 + 0x10),'\0');
  FUN_18000dc0c(param_1,&local_res8,param_3,param_4,local_28,0,0,0);
  return;
}

