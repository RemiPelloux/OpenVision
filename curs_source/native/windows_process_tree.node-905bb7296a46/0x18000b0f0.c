
/* Address: 0x18000b0f0; Evidence: ev_1e7997a47f49dd3ffdd30827e06014bc8e45dde78924ace076ac6415e9766999 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000b0f0(longlong *param_1,ulonglong *param_2,longlong param_3,int param_4)

{
  ulonglong *puVar1;
  int iVar2;
  int iVar3;
  UWMap4 *pUVar4;
  byte *pbVar5;
  int iVar6;
  longlong lVar7;
  uint uVar8;
  ulonglong *puVar9;
  longlong lVar10;
  undefined1 auStackY_138 [32];
  UWMap4 *local_108;
  byte *pbStack_100;
  int local_f8;
  int local_f4;
  int local_f0;
  uint *local_e8;
  byte *local_e0;
  longlong *local_d8;
  undefined8 local_d0;
  ulonglong *local_c8;
  longlong *local_c0;
  ulonglong *local_b8;
  uint *local_b0;
  byte *local_a8;
  UWMap4 *local_98;
  byte *pbStack_90;
  undefined4 local_88;
  int iStack_84;
  int iStack_80;
  uint uStack_7c;
  uint local_78 [2];
  byte *local_70;
  undefined8 local_68;
  undefined8 uStack_60;
  ulonglong local_58;
  
  local_58 = DAT_180023000 ^ (ulonglong)auStackY_138;
  local_f0 = param_4;
  local_d8 = param_1;
  local_c0 = param_1;
  local_d0 = FUN_180007da0();
  iVar6 = FUN_180008744(param_3,param_2);
  puVar1 = param_2 + 9;
  local_c8 = puVar1;
  if ((int)*puVar1 == 0) {
    lVar7 = FUN_180008548();
    if (*(int *)(lVar7 + 0x78) != -2) {
      lVar7 = FUN_180008548();
      iVar6 = *(int *)(lVar7 + 0x78);
      lVar7 = FUN_180008548();
      *(undefined4 *)(lVar7 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar7 = FUN_180008548();
    if (*(int *)(lVar7 + 0x78) != -2) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    iVar6 = (int)*puVar1 + -2;
  }
  lVar7 = FUN_180008548();
  *(int *)(lVar7 + 0x30) = *(int *)(lVar7 + 0x30) + 1;
  puVar9 = param_2 + 1;
  local_70 = (byte *)0x0;
  local_68 = 0;
  uStack_60 = 0;
  if (*(int *)(param_3 + 8) == 0) {
    local_78[0] = 0;
  }
  else {
    local_70 = (byte *)((longlong)*(int *)(param_3 + 8) + *puVar9);
    uVar8 = *local_70 & 0xf;
    local_70 = local_70 + -(longlong)(char)(&DAT_1800175b0)[uVar8];
    local_78[0] = *(uint *)(local_70 + -4) >> ((&DAT_1800175c0)[uVar8] & 0x1f);
  }
  local_108 = (UWMap4 *)local_78;
  local_e8 = local_78;
  pbStack_100 = local_70;
  local_e0 = local_70;
  local_b8 = puVar9;
  FUN_18000b6c4((UWMap4 *)local_78,iVar6,param_4,(longlong *)&local_108,(longlong *)&local_e8);
  while( true ) {
    pbVar5 = pbStack_100;
    local_b0 = local_78;
    local_a8 = local_70;
    if ((pbStack_100 < local_70) || (pbStack_100 <= local_e0)) break;
    FH4::UWMap4::ReadEntry(local_108,&pbStack_100);
    pUVar4 = local_108;
    local_88 = *(undefined4 *)(local_108 + 0x10);
    iVar2 = *(int *)(local_108 + 0x14);
    iVar3 = *(int *)(local_108 + 0x18);
    uVar8 = *(uint *)(local_108 + 0x1c);
    local_98 = local_108;
    pbStack_90 = pbVar5;
    pbStack_100 = pbVar5;
    iStack_84 = iVar2;
    iStack_80 = iVar3;
    uStack_7c = uVar8;
    FH4::UWMap4::ReadEntry(local_108,&pbStack_100);
    pbStack_100 = pbVar5 + -(ulonglong)*(uint *)(pUVar4 + 0x10);
    iVar6 = FUN_18000b794(&local_e8,param_4,(longlong)&local_98,iVar6,&local_108);
    local_f8 = 0;
    if (iVar2 != 0) {
      local_f8 = iVar3;
    }
    local_f4 = iVar6;
    if (local_f8 != 0) {
      *(int *)puVar1 = iVar6 + 2;
      if (iVar2 - 1U < 2) {
        lVar7 = *local_d8;
        if (iVar2 == 2) {
          lVar10 = *(longlong *)((ulonglong)uVar8 + lVar7);
        }
        else {
          lVar10 = (ulonglong)uVar8 + lVar7;
        }
        _CallSettingFrameEncoded((longlong)local_f8 + *puVar9,lVar7,lVar10);
      }
      else {
        _CallSettingFrame();
      }
      FUN_180007dc8(local_d0);
    }
  }
  lVar7 = FUN_180008548();
  if (0 < *(int *)(lVar7 + 0x30)) {
    lVar7 = FUN_180008548();
    *(int *)(lVar7 + 0x30) = *(int *)(lVar7 + 0x30) + -1;
  }
  return;
}

