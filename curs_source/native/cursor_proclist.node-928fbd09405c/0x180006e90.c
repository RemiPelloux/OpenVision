
/* Address: 0x180006e90; Evidence: ev_ca017c8ffe6e3876dbe52f6b40fff5bb1e4fb687566c8652ba4c363c11152652 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */
/* WARNING: Type propagation algorithm not settling */

ulonglong FUN_180006e90(float *param_1)

{
  longlong lVar1;
  int *piVar2;
  int iVar3;
  BOOL BVar4;
  int cbMultiByte;
  HANDLE hObject;
  undefined4 extraout_var;
  LPSTR ******pppppppCVar5;
  longlong *plVar6;
  undefined4 extraout_var_00;
  ulonglong uVar7;
  LPCWSTR lpWideCharStr;
  undefined1 auStackY_328 [32];
  int local_2e8;
  undefined4 local_2e4;
  undefined8 local_2e0 [2];
  undefined8 local_2d0;
  CHAR CStack_2c1;
  LPSTR ******local_2c0;
  undefined8 uStack_2b8;
  ulonglong local_2b0;
  ulonglong uStack_2a8;
  int local_2a0;
  undefined4 uStack_29c;
  LPSTR ******local_298;
  undefined8 uStack_290;
  ulonglong local_288;
  ulonglong uStack_280;
  undefined4 local_278;
  int local_270;
  undefined4 local_258;
  WCHAR local_24c [266];
  ulonglong local_38;
  
  local_38 = DAT_180028040 ^ (ulonglong)auStackY_328;
  hObject = (HANDLE)CreateToolhelp32Snapshot(2,0);
  if (hObject != (HANDLE)0xffffffffffffffff) {
    local_278 = 0x238;
    iVar3 = Process32FirstW(hObject);
    if (iVar3 != 0) {
      do {
        iVar3 = local_270;
        if (local_270 != 0) {
          local_2e8 = local_270;
          local_2e4 = local_258;
          lpWideCharStr = local_24c;
          cbMultiByte = WideCharToMultiByte(0xfde9,0,lpWideCharStr,-1,(LPSTR)0x0,0,(LPCSTR)0x0,
                                            (LPBOOL)0x0);
          uStack_2b8 = 0;
          local_2b0 = 0;
          uStack_2a8 = 0xf;
          local_2c0 = (LPSTR ******)0x0;
          if (1 < cbMultiByte) {
            uVar7 = (longlong)cbMultiByte - 1;
            if (uVar7 == 0) {
                    /* WARNING: Ignoring partial resolution of indirect */
              local_2c0._0_1_ = 0;
              local_2b0 = uVar7;
            }
            else if (uVar7 < 0x10) {
              local_2b0 = uVar7;
              FUN_1800188a0((undefined1 (*) [32])&local_2c0,0,uVar7);
              (&CStack_2c1)[cbMultiByte] = '\0';
            }
            else {
              FUN_1800066d0((undefined8 *)&local_2c0,uVar7,lpWideCharStr,uVar7);
            }
            pppppppCVar5 = (LPSTR ******)&local_2c0;
            if (0xf < uStack_2a8) {
              pppppppCVar5 = local_2c0;
            }
            WideCharToMultiByte(0xfde9,0,local_24c,-1,(LPSTR)pppppppCVar5,cbMultiByte,(LPCSTR)0x0,
                                (LPBOOL)0x0);
          }
          _local_2a0 = CONCAT44(local_2e4,iVar3);
          local_298 = local_2c0;
          uStack_290 = uStack_2b8;
          local_288 = local_2b0;
          uStack_280 = uStack_2a8;
          local_2b0 = 0;
          uStack_2a8 = 0xf;
          local_2c0 = (LPSTR ******)((ulonglong)local_2c0 & 0xffffffffffffff00);
          FUN_180007dc0(param_1,local_2e0,(byte *)&local_2e8,&local_2a0);
          plVar6 = FUN_1800083c0(param_1 + 0x10,&local_2d0,(byte *)&local_2e4);
          lVar1 = *plVar6;
          piVar2 = *(int **)(lVar1 + 0x20);
          if (piVar2 == *(int **)(lVar1 + 0x28)) {
            FUN_180006470((longlong *)(lVar1 + 0x18),(undefined8 *)piVar2,&local_2e8);
          }
          else {
            *piVar2 = local_2e8;
            *(longlong *)(lVar1 + 0x20) = *(longlong *)(lVar1 + 0x20) + 4;
          }
          if (0xf < uStack_280) {
            pppppppCVar5 = local_298;
            if ((0xfff < uStack_280 + 1) &&
               (pppppppCVar5 = (LPSTR ******)local_298[-1],
               (LPSTR)0x1f < (LPSTR)((longlong)local_298 + (-8 - (longlong)pppppppCVar5)))) {
                    /* WARNING: Subroutine does not return */
              _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
            }
            thunk_FUN_1800116e0(pppppppCVar5);
          }
          if (0xf < uStack_2a8) {
            pppppppCVar5 = local_2c0;
            if ((0xfff < uStack_2a8 + 1) &&
               (pppppppCVar5 = (LPSTR ******)local_2c0[-1],
               0x1f < (ulonglong)((longlong)local_2c0 + (-8 - (longlong)pppppppCVar5)))) {
                    /* WARNING: Subroutine does not return */
              _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
            }
            thunk_FUN_1800116e0(pppppppCVar5);
          }
        }
        iVar3 = Process32NextW(hObject);
        if (iVar3 == 0) {
          BVar4 = CloseHandle(hObject);
          return CONCAT71((int7)(CONCAT44(extraout_var_00,BVar4) >> 8),1);
        }
      } while( true );
    }
    BVar4 = CloseHandle(hObject);
    hObject = (HANDLE)CONCAT44(extraout_var,BVar4);
  }
  return (ulonglong)hObject & 0xffffffffffffff00;
}

