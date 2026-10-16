
/* Address: 0x18000d3bc; Evidence: ev_8ff5350632555cabe8b4b19b4e0da6843702f8c95cdb415ae4bc0da010331ad1 */

void FUN_18000d3bc(ulonglong *param_1,undefined1 *param_2,ulonglong param_3,char *param_4,
                  longlong param_5,int param_6,char param_7,int param_8,int param_9,
                  longlong *param_10)

{
  int iVar1;
  undefined8 uVar2;
  ulonglong uVar3;
  int local_18 [4];
  
  local_18[0] = 0;
  local_18[1] = 0;
  local_18[2] = 0;
  local_18[3] = 0;
  uVar2 = FUN_180012b6c(*param_1,param_6 + 1,1,local_18,param_4,param_5);
  uVar3 = (param_3 - (0 < param_6)) - (ulonglong)(local_18[0] == 0x2d);
  if (param_3 == 0xffffffffffffffff) {
    uVar3 = 0xffffffffffffffff;
  }
  iVar1 = FUN_1800125c8((undefined1 (*) [32])
                        (param_2 + (ulonglong)(0 < param_6) + (ulonglong)(local_18[0] == 0x2d)),
                        uVar3,param_6 + 1,local_18,(int)uVar2,param_9,param_10);
  if (iVar1 == 0) {
    FUN_18000d4c0(param_2,param_3,param_6,param_7,param_8,local_18,0,param_10);
  }
  else {
    *param_2 = 0;
  }
  return;
}

