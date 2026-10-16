
/* Address: 0x18000a1fc; Evidence: ev_9892f7b0070bb063e6bbdc791ae8f2f1dbff647bf3e0a24f6dd1cb7612839a4c */

undefined8 FUN_18000a1fc(longlong param_1)

{
  int iVar1;
  longlong *plVar2;
  int iVar3;
  ulonglong uVar4;
  wchar_t *pwVar5;
  
  plVar2 = *(longlong **)(param_1 + 0x18);
  *(longlong **)(param_1 + 0x18) = plVar2 + 1;
  pwVar5 = (wchar_t *)*plVar2;
  iVar1 = *(int *)(param_1 + 0x34);
  iVar3 = *(int *)(param_1 + 0x30);
  if (*(int *)(param_1 + 0x30) == -1) {
    iVar3 = 0x7fffffff;
  }
  *(wchar_t **)(param_1 + 0x40) = pwVar5;
  if ((iVar1 == 2) ||
     (((iVar1 != 3 && (iVar1 != 0xc)) &&
      ((*(int *)(param_1 + 0x34) == 0xd || ((*(char *)(param_1 + 0x39) + 0x9dU & 0xef) == 0)))))) {
    if ((undefined1 (*) [32])pwVar5 == (undefined1 (*) [32])0x0) {
      *(char **)(param_1 + 0x40) = "(null)";
      pwVar5 = (wchar_t *)"(null)";
    }
    uVar4 = FUN_18000cc90((undefined1 (*) [32])pwVar5,(longlong)iVar3);
  }
  else {
    if ((undefined1 (*) [32])pwVar5 == (undefined1 (*) [32])0x0) {
      pwVar5 = L"(null)";
      *(wchar_t **)(param_1 + 0x40) = L"(null)";
    }
    *(undefined1 *)(param_1 + 0x4c) = 1;
    uVar4 = FUN_18000ce20((undefined1 (*) [32])pwVar5,(longlong)iVar3);
  }
  *(int *)(param_1 + 0x48) = (int)uVar4;
  return CONCAT71((int7)(uVar4 >> 8),1);
}

