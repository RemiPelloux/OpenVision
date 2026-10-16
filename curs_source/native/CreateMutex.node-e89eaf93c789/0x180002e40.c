
/* Address: 0x180002e40; Evidence: ev_973b5dc29339b968589856d99a6a17297e3490735075f39cb5382c0118dd19fa */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002e40(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  undefined1 auStackY_168 [32];
  undefined8 *local_138;
  undefined8 local_130;
  longlong local_128;
  undefined8 local_120;
  undefined8 *local_118;
  undefined1 local_110;
  char *local_108;
  undefined8 uStack_100;
  code *local_f8;
  undefined8 uStack_f0;
  undefined8 local_e8;
  undefined8 uStack_e0;
  undefined8 local_d8;
  undefined8 uStack_d0;
  char *local_c8;
  undefined8 uStack_c0;
  code *local_b8;
  undefined8 uStack_b0;
  undefined8 local_a8;
  undefined8 uStack_a0;
  undefined8 local_98;
  undefined8 uStack_90;
  char *local_88;
  undefined8 uStack_80;
  code *local_78;
  undefined8 uStack_70;
  undefined8 local_58;
  undefined8 uStack_50;
  ulonglong local_38;
  
  local_38 = DAT_180022000 ^ (ulonglong)auStackY_168;
  puVar4 = param_3;
  puVar3 = operator_new(0x18);
  *puVar3 = 0;
  puVar3[1] = 0;
  *(undefined1 *)(puVar3 + 2) = 0;
  local_108 = "release";
  uStack_100 = 0;
  local_f8 = FUN_1800035a0;
  uStack_f0 = 0;
  local_e8 = 0;
  uStack_e0 = 0;
  local_d8 = 0;
  uStack_d0 = 0;
  uStack_80 = 0;
  uStack_70 = 0;
  local_58 = 0;
  local_88 = "isActive";
  local_78 = FUN_1800035d0;
  uStack_50 = 0;
  local_c8 = "isActive";
  uStack_c0 = 0;
  local_b8 = FUN_1800035d0;
  uStack_b0 = 0;
  local_a8 = 0;
  uStack_a0 = 0;
  local_98 = 0;
  uStack_90 = 0;
  local_138 = puVar3;
  FUN_180003600(&local_130,param_2,puVar4,2,(longlong)&local_108);
  puVar4 = (undefined8 *)0x0;
  if ((local_128 != 0) &&
     (iVar2 = napi_create_reference(local_130,local_128,1,&local_138), puVar4 = local_138,
     iVar2 != 0)) {
    FUN_1800014c0(&local_88,local_130);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84((longlong *)&local_88,&DAT_180020780);
  }
  local_120 = local_130;
  local_110 = 0;
  local_118 = puVar4;
  if ((puVar3[1] != 0) && (iVar2 = napi_delete_reference(*puVar3), iVar2 != 0)) {
    FUN_1800014c0(&local_88,*puVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84((longlong *)&local_88,&DAT_180020780);
  }
  *puVar3 = local_130;
  puVar3[1] = puVar4;
  *(undefined1 *)(puVar3 + 2) = 0;
  uVar1 = *param_3;
  iVar2 = napi_set_named_property(uVar1,param_3[1],"Mutex",local_128);
  if (iVar2 != 0) {
    FUN_1800014c0(&local_88,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84((longlong *)&local_88,&DAT_180020780);
  }
  iVar2 = napi_set_instance_data(param_2,puVar3,FUN_180003450,0);
  if (iVar2 != 0) {
    FUN_1800014c0(&local_88,param_2);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84((longlong *)&local_88,&DAT_180020780);
  }
  uVar1 = param_3[1];
  *param_1 = *param_3;
  param_1[1] = uVar1;
  return param_1;
}

