
/* Address: 0x1800166b0; Evidence: ev_817426d49fb3bb05e5b7877388c36f082abbc2c91af273ae77ae7fa633668c6d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8
FUN_1800166b0(undefined8 param_1,int param_2,undefined8 param_3,int param_4,uint param_5,
             undefined8 param_6,undefined8 param_7,undefined8 param_8,int param_9)

{
  uint uVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined1 auStackY_128 [32];
  undefined8 local_f8;
  ulonglong local_f0;
  int local_e8 [2];
  undefined8 local_e0;
  undefined8 local_d8;
  undefined8 local_d0;
  undefined8 local_c8;
  uint local_b8 [12];
  undefined8 local_88;
  undefined8 uStack_80;
  undefined8 local_78;
  undefined8 uStack_70;
  undefined8 local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 uStack_50;
  ulonglong local_48;
  
  local_48 = DAT_180027000 ^ (ulonglong)auStackY_128;
  local_f0 = 0;
  local_f8 = param_3;
  uVar1 = FUN_1800165a0(param_5,&local_f0);
  uVar3 = param_8;
  if (uVar1 != 0) {
    local_b8[0] = 0;
    local_b8[1] = 0;
    local_b8[2] = 0;
    local_b8[3] = 0;
    local_b8[4] = 0;
    local_b8[5] = 0;
    local_b8[6] = 0;
    local_b8[7] = 0;
    local_b8[8] = 0;
    local_b8[9] = 0;
    local_b8[10] = 0;
    local_b8[0xb] = 0;
    local_88 = 0;
    uStack_80 = 0;
    local_78 = 0;
    uStack_70 = 0;
    local_68 = 0;
    uStack_60 = 0;
    local_58 = 0;
    uStack_50 = 0;
    if (param_9 == 2) {
      local_88 = param_8;
      local_78 = 3;
    }
    FUN_180016a90(local_b8,&local_f0,(ulonglong)param_5,param_2,(uint *)&param_7,(uint *)&local_f8);
  }
  uVar2 = FUN_1800108e0();
  if (((char)uVar2 == '\0') || (param_4 == 0)) {
    FUN_180016dd0(param_4);
    uVar4 = (undefined4)local_f8;
    uVar5 = (undefined4)((ulonglong)local_f8 >> 0x20);
  }
  else {
    local_d8 = param_7;
    local_c8 = local_f8;
    local_e8[1] = 0;
    local_d0 = uVar3;
    local_e8[0] = param_4;
    local_e0 = param_1;
    uVar3 = FUN_180010910(local_e8);
    if ((int)uVar3 == 0) {
      FUN_180016dd0(param_4);
    }
    uVar4 = (undefined4)local_c8;
    uVar5 = (undefined4)((ulonglong)local_c8 >> 0x20);
  }
  return CONCAT44(uVar5,uVar4);
}

