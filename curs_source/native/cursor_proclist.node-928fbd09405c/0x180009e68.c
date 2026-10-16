
/* Address: 0x180009e68; Evidence: ev_4a5884b994686e16ac79f2971464d1c19660619acf99e78ce8e12f0d2ff8ccc9 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180009e68(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x180009e93;
  FUN_180009f3c((PCONTEXT)&DAT_180028e10);
  _DAT_180028d80 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180028ea8 = puVar3 + 0x40;
  _DAT_180028e90 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180028d70 = 0xc0000409;
  _DAT_180028d74 = 1;
  _DAT_180028d88 = 1;
  DAT_180028d90 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180028040;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180028080;
  *(undefined8 *)(puVar3 + -8) = 0x180009f35;
  DAT_180028f08 = _DAT_180028d80;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_18001b398);
  return;
}

