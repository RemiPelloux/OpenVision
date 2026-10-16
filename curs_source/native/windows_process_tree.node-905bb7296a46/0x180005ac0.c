
/* Address: 0x180005ac0; Evidence: ev_dda19b63b4f499d54f0a4a58e2197d2bcca15273ceb311f6aca9700ecba88497 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Exceeded maximum restarts with more pending */

ulonglong FUN_180005ac0(longlong param_1)

{
  int iVar1;
  BOOL BVar2;
  int cbMultiByte;
  HMODULE hModule;
  FARPROC pFVar3;
  HANDLE hProcess;
  undefined4 extraout_var;
  undefined8 uVar4;
  undefined4 extraout_var_00;
  ulonglong uVar5;
  LPCWSTR ***ppppWVar6;
  ulonglong uVar7;
  undefined1 (*lpMultiByteStr) [32];
  undefined8 *lpBuffer;
  undefined1 auStackY_418 [32];
  undefined8 local_3d8;
  LPCVOID pvStack_3d0;
  undefined8 local_3c8;
  undefined8 uStack_3c0;
  undefined8 local_3b8;
  undefined8 uStack_3b0;
  undefined8 local_3a8;
  undefined8 uStack_3a0;
  undefined8 local_398;
  undefined8 uStack_390;
  undefined8 local_388;
  undefined8 uStack_380;
  undefined8 local_378;
  undefined8 uStack_370;
  undefined8 local_368;
  undefined8 uStack_360;
  undefined8 local_358;
  undefined8 uStack_350;
  undefined8 local_348;
  undefined8 uStack_340;
  ulonglong local_338;
  LPCVOID pvStack_330;
  undefined1 local_328 [32];
  LPCVOID local_308;
  LPCWSTR **local_58;
  undefined8 uStack_50;
  ulonglong local_48;
  ulonglong local_40;
  ulonglong local_38;
  
  local_38 = DAT_180023000 ^ (ulonglong)auStackY_418;
  hModule = GetModuleHandleW(L"ntdll.dll");
  hProcess = (HANDLE)0x0;
  if (hModule != (HMODULE)0x0) {
    pFVar3 = GetProcAddress(hModule,"NtQueryInformationProcess");
    hProcess = (HANDLE)0x0;
    if (pFVar3 != (FARPROC)0x0) {
      local_3d8 = 0;
      pvStack_3d0 = (LPCVOID)0x0;
      local_3c8 = 0;
      uStack_3c0 = 0;
      local_3b8 = 0;
      uStack_3b0 = 0;
      FUN_180015110(&local_328,0,0x2c8);
      local_3a8 = 0;
      uStack_3a0 = 0;
      local_398 = 0;
      uStack_390 = 0;
      local_388 = 0;
      uStack_380 = 0;
      local_378 = 0;
      uStack_370 = 0;
      local_368 = 0;
      uStack_360 = 0;
      local_358 = 0;
      uStack_350 = 0;
      local_348 = 0;
      uStack_340 = 0;
      local_338 = 0;
      pvStack_330 = (LPCVOID)0x0;
      hProcess = OpenProcess(0x410,0,*(DWORD *)(param_1 + 0x104));
      if (hProcess != (HANDLE)0xffffffffffffffff) {
        iVar1 = (*pFVar3)(hProcess,0,&local_3d8,0x30);
        if (((-1 < iVar1) && (pvStack_3d0 != (LPCVOID)0x0)) &&
           (BVar2 = ReadProcessMemory(hProcess,pvStack_3d0,local_328,0x2c8,(SIZE_T *)0x0),
           BVar2 != 0)) {
          lpBuffer = &local_3a8;
          BVar2 = ReadProcessMemory(hProcess,local_308,lpBuffer,0x80,(SIZE_T *)0x0);
          if ((BVar2 != 0) && ((ushort)local_338 != 0)) {
            uStack_50 = 0;
            local_48 = 0;
            local_40 = 7;
            local_58 = (LPCWSTR **)0x0;
            uVar7 = (ulonglong)((ushort)local_338 >> 1);
            if (uVar7 == 0) {
                    /* WARNING: Ignoring partial resolution of indirect */
              local_58._0_2_ = 0;
              local_48 = uVar7;
            }
            else if (uVar7 < 8) {
              ppppWVar6 = &local_58;
              local_48 = uVar7;
              for (uVar5 = uVar7; uVar5 != 0; uVar5 = uVar5 - 1) {
                *(undefined2 *)ppppWVar6 = 0;
                ppppWVar6 = (LPCWSTR ***)((longlong)ppppWVar6 + 2);
              }
              *(undefined2 *)((longlong)&local_58 + uVar7 * 2) = 0;
            }
            else {
              FUN_180005ee0((undefined1 (*) [32])&local_58,uVar7,lpBuffer,uVar7);
            }
            ppppWVar6 = &local_58;
            if (7 < local_40) {
              ppppWVar6 = (LPCWSTR ***)local_58;
            }
            BVar2 = ReadProcessMemory(hProcess,pvStack_330,ppppWVar6,local_338 & 0xffff,
                                      (SIZE_T *)0x0);
            if (BVar2 != 0) {
              iVar1 = (int)local_48;
              ppppWVar6 = &local_58;
              if (7 < local_40) {
                ppppWVar6 = (LPCWSTR ***)local_58;
              }
              cbMultiByte = WideCharToMultiByte(0,0,(LPCWSTR)ppppWVar6,(int)local_48,(LPSTR)0x0,0,
                                                (LPCSTR)0x0,(LPBOOL)0x0);
              if (cbMultiByte != 0) {
                lpMultiByteStr = (undefined1 (*) [32])(param_1 + 0x110);
                FUN_180002e70(lpMultiByteStr,(longlong)cbMultiByte);
                if (0xf < *(ulonglong *)(param_1 + 0x128)) {
                  lpMultiByteStr = *(undefined1 (**) [32])*lpMultiByteStr;
                }
                ppppWVar6 = &local_58;
                if (7 < local_40) {
                  ppppWVar6 = (LPCWSTR ***)local_58;
                }
                WideCharToMultiByte(0,0,(LPCWSTR)ppppWVar6,iVar1,(LPSTR)lpMultiByteStr,cbMultiByte,
                                    (LPCSTR)0x0,(LPBOOL)0x0);
              }
              BVar2 = CloseHandle(hProcess);
              uVar4 = CONCAT44(extraout_var,BVar2);
              if (7 < local_40) {
                ppppWVar6 = (LPCWSTR ***)local_58;
                if ((0xfff < local_40 * 2 + 2) &&
                   (ppppWVar6 = (LPCWSTR ***)local_58[-1],
                   0x1f < (ulonglong)((longlong)local_58 + (-8 - (longlong)ppppWVar6))))
                goto LAB_180005e3f;
                uVar4 = thunk_FUN_18000dfd0(ppppWVar6);
              }
              return CONCAT71((int7)((ulonglong)uVar4 >> 8),1);
            }
            if (7 < local_40) {
              ppppWVar6 = (LPCWSTR ***)local_58;
              if ((0xfff < local_40 * 2 + 2) &&
                 (ppppWVar6 = (LPCWSTR ***)local_58[-1],
                 0x1f < (ulonglong)((longlong)local_58 + (-8 - (longlong)ppppWVar6)))) {
LAB_180005e3f:
                    /* WARNING: Subroutine does not return */
                _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
              }
              thunk_FUN_18000dfd0(ppppWVar6);
            }
          }
        }
        BVar2 = CloseHandle(hProcess);
        hProcess = (HANDLE)CONCAT44(extraout_var_00,BVar2);
      }
    }
  }
  return (ulonglong)hProcess & 0xffffffffffffff00;
}

