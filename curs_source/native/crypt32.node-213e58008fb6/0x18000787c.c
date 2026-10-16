
/* Address: 0x18000787c; Evidence: ev_d5f82157f10d0db237c39a19eaa3ba6fc89aab37fbf60caf4d055ab37c4a8188 */

void FUN_18000787c(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
                  byte *param_5,longlong param_6,byte *param_7,int *param_8)

{
  int iVar1;
  int iVar2;
  int iVar3;
  undefined1 (*pauVar4) [32];
  longlong lVar5;
  longlong local_res10;
  ULONG_PTR local_res18;
  byte in_stack_00000060;
  
  local_res18 = param_3;
  pauVar4 = (undefined1 (*) [32])FUN_180005fd4(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_1800076e0(param_1,pauVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0x10);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_180006750();
  FUN_1800063b4(param_2,param_1,local_res18,(ULONG_PTR)pauVar4,lVar5 + iVar1,param_5,iVar3,iVar2,
                param_6,param_4,in_stack_00000060);
  return;
}

