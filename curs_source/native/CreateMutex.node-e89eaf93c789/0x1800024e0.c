
/* Address: 0x1800024e0; Evidence: ev_7a84c7c19e0c48b8add8b257bf9d6f252f190bbbb5517cc30a40188772ea21e6 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_1800024e0(undefined8 *param_1,longlong param_2)

{
  int iVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  HANDLE hObject;
  undefined8 uVar4;
  LPCSTR **lpName;
  undefined1 auStack_c8 [32];
  undefined8 local_a8;
  undefined8 local_a0;
  undefined8 local_98 [2];
  LPCSTR *local_88 [3];
  ulonglong local_70;
  longlong local_68 [10];
  ulonglong local_18;
  
  local_18 = DAT_180022000 ^ (ulonglong)auStack_c8;
  uVar4 = *(undefined8 *)(param_2 + 8);
  local_a8 = uVar4;
  puVar2 = FUN_1800023b0(param_2,local_98);
  uVar3 = FUN_180001270(puVar2);
  if ((char)uVar3 == '\0') {
    uVar4 = FUN_180001210(&local_a8);
    FUN_180001760(local_68,uVar4,0x18001df90);
                    /* WARNING: Subroutine does not return */
    FUN_180006f84(local_68,&DAT_180020780);
  }
  puVar2 = FUN_1800023b0(param_2,local_98);
  local_a8 = *puVar2;
  local_a0 = puVar2[1];
  FUN_1800012f0(&local_a8,(undefined1 (*) [32])local_88);
  lpName = local_88;
  if (0xf < local_70) {
    lpName = (LPCSTR **)local_88[0];
  }
  hObject = OpenMutexA(0x100000,0,(LPCSTR)lpName);
  if (hObject != (HANDLE)0x0) {
    CloseHandle(hObject);
  }
  iVar1 = napi_get_boolean(uVar4,hObject != (HANDLE)0x0,&local_a8);
  if (iVar1 == 0) {
    *param_1 = uVar4;
    param_1[1] = local_a8;
    FUN_180002a80((longlong *)local_88);
    return param_1;
  }
  FUN_1800014c0(local_68,uVar4);
                    /* WARNING: Subroutine does not return */
  FUN_180006f84(local_68,&DAT_180020780);
}

