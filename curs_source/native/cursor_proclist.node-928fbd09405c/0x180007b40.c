
/* Address: 0x180007b40; Evidence: ev_b30902d3d5cb7994103507811391c8dbea3155f8c984ea677278db302a9bf4b8 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

undefined8 FUN_180007b40(uint param_1,uint *param_2)

{
  uint *puVar1;
  uint uVar2;
  BOOL BVar3;
  int iVar4;
  uint *puVar5;
  HANDLE hProcess;
  undefined4 extraout_var;
  undefined8 uVar6;
  longlong *plVar7;
  longlong lVar8;
  longlong lVar9;
  undefined1 auStackY_d8 [32];
  byte bStack_a7;
  byte bStack_a6;
  byte bStack_a5;
  _FILETIME local_a0;
  _FILETIME local_98;
  _FILETIME local_90;
  _FILETIME local_88 [2];
  undefined8 local_78;
  undefined8 uStack_70;
  ulonglong local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 uStack_50;
  undefined8 local_48;
  undefined8 uStack_40;
  undefined8 local_38;
  undefined8 uStack_30;
  ulonglong local_28;
  
  local_28 = DAT_180028040 ^ (ulonglong)auStackY_d8;
  if (DAT_180029dd0 == '\0') {
    FUN_180007400();
  }
  puVar1 = param_2 + 2;
  *param_2 = param_1;
  param_2[1] = 0;
  FUN_1800060c0((longlong *)puVar1,(undefined8 *)"<unknown>",9);
  puVar5 = param_2 + 0x14;
  param_2[0x10] = 0;
  param_2[0x11] = 0;
  param_2[0x12] = 0;
  param_2[0x13] = 0;
  param_2[0x18] = 0;
  param_2[0x19] = 0;
  if (0xf < *(ulonglong *)(param_2 + 0x1a)) {
    puVar5 = *(uint **)puVar5;
  }
  *(undefined1 *)puVar5 = 0;
  puVar5 = param_2 + 0x1c;
  param_2[0x20] = 0;
  param_2[0x21] = 0;
  if (0xf < *(ulonglong *)(param_2 + 0x22)) {
    puVar5 = *(uint **)puVar5;
  }
  *(undefined1 *)puVar5 = 0;
  puVar5 = param_2 + 0x24;
  param_2[0x28] = 0;
  param_2[0x29] = 0;
  if (0xf < *(ulonglong *)(param_2 + 0x2a)) {
    puVar5 = *(uint **)puVar5;
  }
  *(undefined1 *)puVar5 = 0;
  if (*(longlong **)(param_2 + 10) != *(longlong **)(param_2 + 0xc)) {
    FUN_180006630(*(longlong **)(param_2 + 10),*(longlong **)(param_2 + 0xc));
    *(undefined8 *)(param_2 + 0xc) = *(undefined8 *)(param_2 + 10);
  }
  bStack_a7 = (byte)(param_1 >> 8);
  bStack_a6 = (byte)(param_1 >> 0x10);
  bStack_a5 = (byte)(param_1 >> 0x18);
  plVar7 = (longlong *)
           (((((((ulonglong)(param_1 & 0xff) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
               (ulonglong)bStack_a7) * 0x100000001b3 ^ (ulonglong)bStack_a6) * 0x100000001b3 ^
             (ulonglong)bStack_a5) * 0x100000001b3 & _DAT_180029e10) * 0x10 + DAT_180029df8);
  lVar8 = plVar7[1];
  lVar9 = 0;
  if (lVar8 != DAT_180029de8) {
    uVar2 = *(uint *)(lVar8 + 0x10);
    while ((lVar9 = lVar8, param_1 != uVar2 && (lVar9 = 0, lVar8 != *plVar7))) {
      lVar8 = *(longlong *)(lVar8 + 8);
      uVar2 = *(uint *)(lVar8 + 0x10);
    }
  }
  lVar8 = DAT_180029de8;
  if (lVar9 != 0) {
    lVar8 = lVar9;
  }
  if (lVar8 != DAT_180029de8) {
    param_2[1] = *(uint *)(lVar8 + 0x1c);
    if ((*(ulonglong *)(lVar8 + 0x30) != 0) && (puVar5 = (uint *)(lVar8 + 0x20), puVar1 != puVar5))
    {
      if (0xf < *(ulonglong *)(lVar8 + 0x38)) {
        puVar5 = *(uint **)puVar5;
      }
      FUN_1800060c0((longlong *)puVar1,(undefined8 *)puVar5,*(ulonglong *)(lVar8 + 0x30));
    }
  }
  hProcess = OpenProcess(0x1000,0,param_1);
  uVar6 = 0;
  if (hProcess != (HANDLE)0x0) {
    BVar3 = GetProcessTimes(hProcess,local_88,&local_90,&local_a0,&local_98);
    if (BVar3 != 0) {
      *(ulonglong *)(param_2 + 0x10) = (ulonglong)((longlong)local_a0 + (longlong)local_98) / 10000;
    }
    uStack_70 = 0;
    local_78 = 0x50;
    local_68 = 0;
    uStack_60 = 0;
    local_58 = 0;
    uStack_50 = 0;
    local_48 = 0;
    uStack_40 = 0;
    local_38 = 0;
    uStack_30 = 0;
    iVar4 = K32GetProcessMemoryInfo(hProcess,&local_78,0x50);
    if (iVar4 != 0) {
      *(ulonglong *)(param_2 + 0x12) = local_68 >> 0x14;
    }
    BVar3 = CloseHandle(hProcess);
    uVar6 = CONCAT71((int7)(CONCAT44(extraout_var,BVar3) >> 8),1);
  }
  return uVar6;
}

