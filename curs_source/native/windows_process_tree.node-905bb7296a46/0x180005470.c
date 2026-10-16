
/* Address: 0x180005470; Evidence: ev_e39033e1445b43bae65ba178878486dea47c96e1652a614bc9b4ecfc0f605e9d */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180005470(longlong param_1)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  int iVar4;
  longlong *plVar5;
  undefined8 ***pppuVar6;
  longlong lVar7;
  longlong lVar8;
  uint uVar9;
  undefined1 auStack_138 [32];
  undefined8 local_118;
  undefined8 *local_110;
  undefined8 **local_108;
  undefined8 local_100;
  undefined8 local_f8;
  undefined8 local_f0;
  undefined8 local_e8;
  undefined8 local_e0;
  undefined8 local_d8;
  undefined8 local_d0;
  undefined8 local_c8;
  undefined8 local_c0;
  undefined8 *local_b8;
  undefined8 local_b0;
  longlong local_a8 [10];
  undefined8 **local_58 [3];
  ulonglong local_40;
  ulonglong local_38;
  
  local_38 = DAT_180023000 ^ (ulonglong)auStack_138;
  local_100 = *(undefined8 *)(param_1 + 8);
  iVar4 = napi_open_handle_scope(local_100,&local_f8);
  if (iVar4 != 0) {
    FUN_1800014a0(local_a8,local_100);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_a8,&DAT_180021cb0);
  }
  puVar1 = *(undefined8 **)(param_1 + 8);
  iVar4 = napi_create_array_with_length(puVar1,*(undefined4 *)(param_1 + 0x88),&local_118);
  uVar2 = local_118;
  if (iVar4 != 0) {
    FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
    FUN_18000837c(local_a8,&DAT_180021cb0);
  }
  uVar9 = 0;
  if (*(int *)(param_1 + 0x88) != 0) {
    do {
      lVar7 = (ulonglong)uVar9 * 0x130 + *(longlong *)(param_1 + 0x70);
      iVar4 = napi_create_object(puVar1,&local_e8);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      if (lVar7 == 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      lVar8 = -1;
      do {
        lVar8 = lVar8 + 1;
      } while (*(char *)(lVar7 + lVar8) != '\0');
      iVar4 = napi_create_string_utf8(puVar1,lVar7,lVar8,&local_118);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      local_b0 = local_118;
      local_b8 = puVar1;
      FUN_180001320(&local_b8,(undefined1 (*) [32])local_58);
      pppuVar6 = local_58;
      if (0xf < local_40) {
        pppuVar6 = (undefined8 ***)local_58[0];
      }
      iVar4 = napi_create_string_utf8(puVar1,pppuVar6,local_58[2],&local_f0);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      FUN_180002f40((longlong *)local_58);
      uVar3 = local_e8;
      iVar4 = napi_set_named_property(puVar1,local_e8,&DAT_18001f28c,local_f0);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      iVar4 = napi_create_double(puVar1,(double)*(uint *)(lVar7 + 0x104),&local_e0);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      iVar4 = napi_set_named_property(puVar1,uVar3,&DAT_18001f1c4,local_e0);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      iVar4 = napi_create_double(puVar1,(double)*(uint *)(lVar7 + 0x108),&local_d8);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      iVar4 = napi_set_named_property(puVar1,uVar3,&DAT_18001f294,local_d8);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      if ((*(byte *)(param_1 + 0x8c) & 1) != 0) {
        iVar4 = napi_create_double(puVar1,(double)*(uint *)(lVar7 + 0x10c),&local_d0);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
        iVar4 = napi_set_named_property(puVar1,uVar3,"memory",local_d0);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
      }
      if ((*(byte *)(param_1 + 0x8c) & 2) != 0) {
        plVar5 = (longlong *)(lVar7 + 0x110);
        if (0xf < *(ulonglong *)(lVar7 + 0x128)) {
          plVar5 = (longlong *)*plVar5;
        }
        iVar4 = napi_create_string_utf8(puVar1,plVar5,*(undefined8 *)(lVar7 + 0x120),&local_c8);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
        local_108 = (undefined8 **)local_c8;
        local_110 = puVar1;
        FUN_180001320(&local_110,(undefined1 (*) [32])local_58);
        pppuVar6 = local_58;
        if (0xf < local_40) {
          pppuVar6 = (undefined8 ***)local_58[0];
        }
        iVar4 = napi_create_string_utf8(puVar1,pppuVar6,local_58[2],&local_c0);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
        FUN_180002f40((longlong *)local_58);
        iVar4 = napi_set_named_property(puVar1,uVar3,"commandLine",local_c0);
        if (iVar4 != 0) {
          FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
          FUN_18000837c(local_a8,&DAT_180021cb0);
        }
      }
      iVar4 = napi_set_element(puVar1,uVar2,uVar9,uVar3);
      if (iVar4 != 0) {
        FUN_1800014a0(local_a8,puVar1);
                    /* WARNING: Subroutine does not return */
        FUN_18000837c(local_a8,&DAT_180021cb0);
      }
      uVar9 = uVar9 + 1;
    } while (uVar9 < *(uint *)(param_1 + 0x88));
  }
  local_110 = &local_118;
  local_108 = &local_110;
  FUN_180003350((undefined8 *)(param_1 + 0x30),&local_b8,(longlong *)&local_110);
  iVar4 = napi_close_handle_scope(local_100,local_f8);
  if (iVar4 == 0) {
    return;
  }
                    /* WARNING: Subroutine does not return */
  FUN_180001740("HandleScope::~HandleScope","napi_close_handle_scope");
}

