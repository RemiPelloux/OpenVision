
/* Address: 0x180005f70; Evidence: ev_1a01c96b648d82d353bbfdad614fd92481dcfb039acba34f08948c9c31e96124 */

undefined8 FUN_180005f70(ulonglong param_1,ulonglong param_2)

{
  code *pcVar1;
  undefined1 local_88 [8];
  undefined8 local_80;
  ulonglong local_78 [12];
  LPVOID local_18;
  undefined8 *local_10;
  
  FUN_180002470(local_78,param_1,param_2);
  pcVar1 = (code *)*local_10;
  local_10 = (undefined8 *)local_10[1];
  (*pcVar1)(local_88,local_78);
  if (local_18 != (LPVOID)0x0) {
    thunk_FUN_1800116e0(local_18);
  }
  return local_80;
}

