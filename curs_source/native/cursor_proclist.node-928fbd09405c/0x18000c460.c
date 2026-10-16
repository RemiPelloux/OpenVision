
/* Address: 0x18000c460; Evidence: ev_7878897233efe8258eda34627b8a7632b9957eaa351859b78c356837f5558233 */

void FUN_18000c460(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
                  byte *param_5,longlong param_6,byte *param_7,int *param_8)

{
  int iVar1;
  int iVar2;
  int iVar3;
  longlong *plVar4;
  longlong lVar5;
  longlong local_res10;
  ULONG_PTR local_res18;
  byte in_stack_00000060;
  
  local_res18 = param_3;
  plVar4 = FUN_18000aba0(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_18000c2c4(param_1,plVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0x10);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_18000b31c();
  FUN_18000af80(param_2,param_1,local_res18,(ULONG_PTR)plVar4,lVar5 + iVar1,param_5,iVar3,iVar2,
                param_6,param_4,in_stack_00000060);
  return;
}

