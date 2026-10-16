
/* Address: 0x180004700; Evidence: ev_29abc6bde82ee931af8b67a1586a69425d32358bd8afa8071974bc3a4f06b620 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

undefined8 * FUN_180004700(undefined8 *param_1,longlong param_2)

{
  undefined8 uVar1;
  LPVOID pvVar2;
  int iVar3;
  undefined8 *puVar4;
  longlong *plVar5;
  undefined8 *puVar6;
  LPVOID pvVar7;
  undefined1 auStackY_a8 [32];
  longlong local_60 [3];
  undefined8 local_48;
  longlong local_40;
  char local_38;
  undefined1 local_30;
  undefined7 uStack_2f;
  undefined8 local_20;
  ulonglong local_18;
  ulonglong local_10;
  
  local_10 = DAT_180028040 ^ (ulonglong)auStackY_a8;
  puVar4 = operator_new(0xb8);
  plVar5 = FUN_180004100(local_60,param_2);
  puVar4 = FUN_180003bc0(puVar4,*(undefined8 *)(param_2 + 8),plVar5);
  iVar3 = napi_queue_async_work(puVar4[1],puVar4[2]);
  if (iVar3 != 0) {
    puVar6 = FUN_180001d60(&local_48,puVar4[1]);
    FUN_1800023f0(puVar6);
    if (0xf < local_18) {
      pvVar2 = (LPVOID)CONCAT71(uStack_2f,local_30);
      pvVar7 = pvVar2;
      if ((0xfff < local_18 + 1) &&
         (pvVar7 = *(LPVOID *)((longlong)pvVar2 + -8),
         0x1f < (ulonglong)((longlong)pvVar2 + (-8 - (longlong)pvVar7)))) {
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar7);
    }
    local_20 = 0;
    local_18 = 0xf;
    local_30 = 0;
    if ((local_40 != 0) && (local_38 == '\0')) {
      napi_delete_reference(local_48);
    }
  }
  uVar1 = puVar4[0x13];
  *param_1 = puVar4[0x11];
  param_1[1] = uVar1;
  return param_1;
}

