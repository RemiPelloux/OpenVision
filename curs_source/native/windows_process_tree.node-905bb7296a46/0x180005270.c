
/* Address: 0x180005270; Evidence: ev_0de1b266020492a8f00b1d26988b705ffeac535325b75b6d7d07b436c0774635 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180005270(longlong param_1)

{
  char *pcVar1;
  uint uVar2;
  undefined8 *puVar3;
  int iVar4;
  HANDLE hObject;
  HANDLE hObject_00;
  longlong lVar5;
  uint uVar6;
  undefined1 auStack_318 [48];
  char local_2e8 [272];
  longlong local_1d8;
  undefined8 uStack_1d0;
  undefined8 local_1c8;
  undefined8 uStack_1c0;
  undefined1 local_1b8 [80];
  undefined4 local_168 [2];
  DWORD local_160;
  char acStack_13c [260];
  ulonglong local_38;
  
  local_38 = DAT_180023000 ^ (ulonglong)auStack_318;
  uVar2 = *(uint *)(param_1 + 0x8c);
  FUN_180015110((undefined1 (*) [32])local_168,0,0x130);
  uVar6 = 0;
  hObject = (HANDLE)CreateToolhelp32Snapshot(2,0);
  local_168[0] = 0x130;
  iVar4 = Process32First(hObject,local_168);
  while (iVar4 != 0) {
    if (local_160 != 0) {
      uStack_1d0 = 0;
      local_1c8 = 0;
      uStack_1c0 = 0xf;
      local_1d8 = 0;
      if (((uVar2 & 1) != 0) &&
         (hObject_00 = OpenProcess(0x410,0,local_160), hObject_00 != (HANDLE)0x0)) {
        K32GetProcessMemoryInfo(hObject_00,local_1b8,0x48);
        CloseHandle(hObject_00);
      }
      if ((uVar2 & 2) != 0) {
        FUN_180005ac0((longlong)local_2e8);
      }
      lVar5 = 0;
      do {
        pcVar1 = acStack_13c + lVar5;
        local_2e8[lVar5] = *pcVar1;
        lVar5 = lVar5 + 1;
      } while (*pcVar1 != '\0');
      puVar3 = *(undefined8 **)(param_1 + 0x78);
      if (puVar3 == *(undefined8 **)(param_1 + 0x80)) {
        FUN_180004ec0((longlong *)(param_1 + 0x70),puVar3,(undefined8 *)local_2e8);
      }
      else {
        FUN_180005130(puVar3,(undefined8 *)local_2e8);
        *(longlong *)(param_1 + 0x78) = *(longlong *)(param_1 + 0x78) + 0x130;
      }
      uVar6 = uVar6 + 1;
      FUN_180002f40(&local_1d8);
      if (0x3ff < uVar6) break;
    }
    iVar4 = Process32Next(hObject);
  }
  CloseHandle(hObject);
  *(uint *)(param_1 + 0x88) = uVar6;
  return;
}

