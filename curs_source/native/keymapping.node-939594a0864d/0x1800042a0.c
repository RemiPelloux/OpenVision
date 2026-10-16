
/* Address: 0x1800042a0; Evidence: ev_7ebca1b6ba6f21fe0ebaee7b2ed2087ae6ea8eb907e408062036b22707cb0bfa */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_1800042a0(void)

{
  code *pcVar1;
  BOOL BVar2;
  undefined1 *puVar3;
  undefined1 auStack_38 [8];
  undefined1 auStack_30 [48];
  
  puVar3 = auStack_38;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(2);
    puVar3 = auStack_30;
  }
  *(undefined8 *)(puVar3 + -8) = 0x1800042cb;
  FUN_180004498((PCONTEXT)&DAT_180027c50);
  _DAT_180027bc0 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180027ce8 = puVar3 + 0x40;
  _DAT_180027cd0 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180027bb0 = 0xc0000409;
  _DAT_180027bb4 = 1;
  _DAT_180027bc8 = 1;
  DAT_180027bd0 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180027000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180027040;
  *(undefined8 *)(puVar3 + -8) = 0x18000436d;
  DAT_180027d48 = _DAT_180027bc0;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_180019540);
  return;
}

