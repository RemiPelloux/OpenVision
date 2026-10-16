
/* Address: 0x18000c388; Evidence: ev_3d6c4ae53abba60a4b475bb02dbd2dcd083cee89a5e9e677584aa2263c3d16b6 */

void FUN_18000c388(ULONG_PTR param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,
                  ULONG_PTR param_5,byte *param_6,byte *param_7,int *param_8)

{
  int iVar1;
  int iVar2;
  int iVar3;
  longlong *plVar4;
  longlong lVar5;
  longlong local_res10;
  ULONG_PTR local_res18;
  byte in_stack_00000060;
  undefined4 in_stack_ffffffffffffffa4;
  
  local_res18 = param_3;
  plVar4 = FUN_18000aab8(param_2,param_4,param_5,&local_res10);
  if (param_7 != (byte *)0x0) {
    FUN_18000c204(param_1,plVar4,param_6,param_7);
  }
  iVar1 = *(int *)(param_6 + 0xc);
  iVar2 = param_8[2];
  iVar3 = *param_8;
  lVar5 = FUN_18000b31c();
  FUN_18000ae7c(param_2,param_1,local_res18,(ULONG_PTR)plVar4,lVar5 + iVar1,param_5,iVar3,
                CONCAT44(in_stack_ffffffffffffffa4,iVar2),param_6,param_4,in_stack_00000060);
  return;
}

