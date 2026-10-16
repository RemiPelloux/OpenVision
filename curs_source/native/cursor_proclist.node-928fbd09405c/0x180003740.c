
/* Address: 0x180003740; Evidence: ev_71559e2f08439e760159d3bb11f4455262587009bb0e5d88dc37f0d70a8662b6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180003740(undefined8 *param_1,undefined8 param_2,undefined8 *param_3)

{
  LPVOID pvVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  undefined8 uVar4;
  undefined8 uVar5;
  undefined8 uVar6;
  int iVar7;
  undefined8 *puVar8;
  undefined8 uVar9;
  LPVOID pvVar10;
  longlong lVar11;
  uint *puVar12;
  ulonglong uVar13;
  uint *puVar14;
  undefined1 auStackY_1c8 [32];
  undefined8 local_198;
  undefined8 uStack_190;
  int local_188;
  undefined8 local_178;
  undefined8 uStack_170;
  undefined4 local_168;
  int local_158;
  undefined4 uStack_154;
  uint *local_150;
  undefined8 local_148;
  undefined8 uStack_140;
  undefined8 local_138;
  undefined8 uStack_130;
  undefined8 local_128 [2];
  undefined8 local_118 [2];
  undefined8 local_108 [2];
  undefined8 local_f8 [2];
  undefined8 local_e8 [2];
  undefined8 local_d8 [2];
  undefined8 local_c8 [2];
  undefined8 local_b8 [2];
  undefined8 local_a8 [2];
  undefined8 local_98;
  longlong local_90;
  char local_88;
  undefined1 local_80;
  undefined7 uStack_7f;
  undefined8 local_70;
  ulonglong uStack_68;
  ulonglong local_60;
  
  local_60 = DAT_180028040 ^ (ulonglong)auStackY_1c8;
  iVar7 = napi_create_array(param_2,&local_158);
  if (iVar7 == 0) {
    param_1[1] = CONCAT44(uStack_154,local_158);
    uVar9 = param_2;
  }
  else {
    puVar8 = FUN_180001d60(&local_98,param_2);
    FUN_1800023f0(puVar8);
    if (0xf < uStack_68) {
      pvVar1 = (LPVOID)CONCAT71(uStack_7f,local_80);
      pvVar10 = pvVar1;
      if ((0xfff < uStack_68 + 1) &&
         (pvVar10 = *(LPVOID *)((longlong)pvVar1 + -8),
         0x1f < (ulonglong)((longlong)pvVar1 + (-8 - (longlong)pvVar10)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar10);
    }
    local_70 = 0;
    uStack_68 = 0xf;
    local_80 = 0;
    if ((local_90 != 0) && (local_88 == '\0')) {
      napi_delete_reference(local_98);
    }
    param_1[1] = 0;
    uVar9 = 0;
  }
  *param_1 = uVar9;
  local_158 = 0;
  local_150 = (uint *)param_3[1];
  puVar14 = (uint *)*param_3;
  if (puVar14 != local_150) {
    puVar12 = puVar14 + 0xc;
    do {
      uVar13 = 0;
      FUN_180001b30(&local_148,param_2,9);
      puVar8 = FUN_180001360(local_128,param_2,SUB84((double)*puVar14,0));
      uVar3 = uStack_140;
      uVar9 = local_148;
      local_198 = *puVar8;
      uStack_190 = puVar8[1];
      local_178 = local_148;
      uStack_170 = uStack_140;
      local_168 = 0;
      FUN_180004db0(&local_178);
      puVar8 = FUN_180001360(local_118,param_2,SUB84((double)puVar12[-0xb],0));
      local_198 = *puVar8;
      uStack_190 = puVar8[1];
      local_178 = uVar9;
      uStack_170 = uVar3;
      local_168 = 1;
      FUN_180004db0(&local_178);
      puVar8 = FUN_180001470(local_108,param_2,(undefined8 *)(puVar12 + -10));
      uVar4 = uStack_140;
      uVar2 = local_148;
      local_198 = *puVar8;
      uStack_190 = puVar8[1];
      local_178 = local_148;
      uStack_170 = uStack_140;
      FUN_180005950(&local_178,2,&local_198);
      puVar8 = FUN_180001470(local_f8,param_2,(undefined8 *)(puVar12 + 8));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar2;
      uStack_190 = uVar4;
      FUN_180005950(&local_198,3,&local_178);
      puVar8 = FUN_180001360(local_e8,param_2,SUB84((double)*(ulonglong *)(puVar12 + 4),0));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar9;
      uStack_190 = uVar3;
      local_188 = 4;
      FUN_180004db0(&local_198);
      puVar8 = FUN_180001360(local_d8,param_2,SUB84((double)*(ulonglong *)(puVar12 + 6),0));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar9;
      uStack_190 = uVar3;
      local_188 = 5;
      FUN_180004db0(&local_198);
      FUN_180001b30(&local_138,param_2,
                    *(longlong *)puVar12 - *(longlong *)(puVar12 + -2) >> 5 & 0xffffffff);
      uVar6 = uStack_130;
      uVar5 = local_138;
      lVar11 = *(longlong *)(puVar12 + -2);
      if (*(longlong *)puVar12 - lVar11 >> 5 != 0) {
        do {
          puVar8 = FUN_180001470(local_c8,param_2,(undefined8 *)(lVar11 + uVar13 * 0x20));
          local_178 = *puVar8;
          uStack_170 = puVar8[1];
          local_198 = uVar5;
          uStack_190 = uVar6;
          FUN_180005950(&local_198,uVar13,&local_178);
          uVar13 = (ulonglong)((int)uVar13 + 1);
          lVar11 = *(longlong *)(puVar12 + -2);
        } while (uVar13 < (ulonglong)(*(longlong *)puVar12 - lVar11 >> 5));
      }
      local_178 = uVar5;
      uStack_170 = uVar6;
      local_198 = uVar9;
      uStack_190 = uVar3;
      local_188 = 6;
      FUN_180004db0(&local_198);
      puVar8 = FUN_180001470(local_b8,param_2,(undefined8 *)(puVar12 + 0x10));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar2;
      uStack_190 = uVar4;
      FUN_180005950(&local_198,7,&local_178);
      puVar8 = FUN_180001470(local_a8,param_2,(undefined8 *)(puVar12 + 0x18));
      local_178 = *puVar8;
      uStack_170 = puVar8[1];
      local_198 = uVar2;
      uStack_190 = uVar4;
      FUN_180005950(&local_198,8,&local_178);
      local_178 = uVar2;
      uStack_170 = uVar4;
      local_198 = *param_1;
      uStack_190 = param_1[1];
      local_188 = local_158;
      local_158 = local_158 + 1;
      FUN_180004db0(&local_198);
      puVar14 = puVar14 + 0x2c;
      puVar12 = puVar12 + 0x2c;
    } while (puVar14 != local_150);
  }
  return param_1;
}

