
/* Address: 0x180002a10; Evidence: ev_76b1da0dcbc7a43c53222e730d236a2bafa7e6df64ca91e914be812079c4f784 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180002a10(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  undefined8 uVar1;
  int iVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  undefined1 auStackY_1a8 [32];
  undefined8 *local_178;
  undefined8 local_170;
  longlong local_168;
  undefined8 local_160;
  undefined8 *local_158;
  undefined1 local_150;
  undefined *local_148;
  undefined8 uStack_140;
  code *local_138;
  undefined8 uStack_130;
  undefined8 local_118;
  undefined8 uStack_110;
  undefined *local_f8;
  undefined8 uStack_f0;
  code *local_e8;
  undefined8 uStack_e0;
  undefined8 local_d8;
  undefined8 uStack_d0;
  undefined8 local_c8;
  undefined8 uStack_c0;
  undefined *local_b8;
  undefined8 uStack_b0;
  code *local_a8;
  undefined8 uStack_a0;
  undefined8 local_98;
  undefined8 uStack_90;
  undefined8 local_88;
  undefined8 uStack_80;
  undefined *local_78;
  undefined8 uStack_70;
  code *local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 uStack_50;
  undefined8 local_48;
  undefined8 uStack_40;
  ulonglong local_38;
  
  local_38 = DAT_180021000 ^ (ulonglong)auStackY_1a8;
  local_f8 = &DAT_18001cfa4;
  uStack_f0 = 0;
  local_e8 = FUN_180003030;
  uStack_e0 = 0;
  local_d8 = 0;
  uStack_d0 = 0;
  local_c8 = 0;
  uStack_c0 = 0;
  local_b8 = &DAT_18001cfac;
  uStack_b0 = 0;
  local_a8 = FUN_180003060;
  uStack_a0 = 0;
  local_98 = 0;
  uStack_90 = 0;
  local_88 = 0;
  uStack_80 = 0;
  uStack_140 = 0;
  uStack_130 = 0;
  local_118 = 0;
  local_148 = &DAT_18001cfb4;
  local_138 = FUN_180003090;
  uStack_110 = 0;
  local_78 = &DAT_18001cfb4;
  uStack_70 = 0;
  local_68 = FUN_180003090;
  uStack_60 = 0;
  local_58 = 0;
  uStack_50 = 0;
  local_48 = 0;
  uStack_40 = 0;
  FUN_1800030c0(&local_170,param_2,param_3,3,(longlong)&local_f8);
  puVar3 = operator_new(0x18);
  *puVar3 = 0;
  puVar3[1] = 0;
  *(undefined1 *)(puVar3 + 2) = 0;
  puVar4 = (undefined8 *)0x0;
  local_178 = puVar3;
  if ((local_168 != 0) &&
     (iVar2 = napi_create_reference(local_170,local_168,1,&local_178), puVar4 = local_178,
     iVar2 != 0)) {
    FUN_1800014f0(&local_148,local_170);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04((longlong *)&local_148,&DAT_18001f750);
  }
  local_160 = local_170;
  local_150 = 0;
  local_158 = puVar4;
  if ((puVar3[1] != 0) && (iVar2 = napi_delete_reference(*puVar3), iVar2 != 0)) {
    FUN_1800014f0(&local_148,*puVar3);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04((longlong *)&local_148,&DAT_18001f750);
  }
  *puVar3 = local_170;
  puVar3[1] = puVar4;
  *(undefined1 *)(puVar3 + 2) = 0;
  uVar1 = *param_3;
  iVar2 = napi_set_named_property(uVar1,param_3[1],"Crypt32",local_168);
  if (iVar2 != 0) {
    FUN_1800014f0(&local_148,uVar1);
                    /* WARNING: Subroutine does not return */
    FUN_180006d04((longlong *)&local_148,&DAT_18001f750);
  }
  iVar2 = napi_set_instance_data(param_2,puVar3,FUN_180002d90,0);
  if (iVar2 != 0) {
                    /* WARNING: Subroutine does not return */
    FUN_1800017b0("BasicEnv::SetInstanceData","invalid arguments");
  }
  uVar1 = param_3[1];
  *param_1 = *param_3;
  param_1[1] = uVar1;
  return param_1;
}

