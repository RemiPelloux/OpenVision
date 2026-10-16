
/* Address: 0x180004388; Evidence: ev_e63d9a6488f47fcab1e20639bbc9a5676166f2c81a69ef043fc83dc7b0350100 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180004388(undefined4 param_1)

{
  code *pcVar1;
  BOOL BVar2;
  undefined1 *puVar3;
  undefined1 auStack_28 [8];
  undefined1 auStack_20 [32];
  
  puVar3 = auStack_28;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(param_1);
    puVar3 = auStack_20;
  }
  *(undefined8 *)(puVar3 + -8) = 0x1800043b3;
  FUN_180004428((PCONTEXT)&DAT_180027c50);
  _DAT_180027bc0 = *(undefined8 *)(puVar3 + 0x28);
  _DAT_180027ce8 = puVar3 + 0x30;
  _DAT_180027bb0 = 0xc0000409;
  _DAT_180027bb4 = 1;
  _DAT_180027bc8 = 1;
  DAT_180027bd0 = (ulonglong)*(uint *)(puVar3 + 0x30);
  *(undefined8 *)(puVar3 + -8) = 0x18000441f;
  DAT_180027d48 = _DAT_180027bc0;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_180019540);
  return;
}

