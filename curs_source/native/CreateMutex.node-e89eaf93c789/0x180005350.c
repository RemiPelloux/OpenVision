
/* Address: 0x180005350; Evidence: ev_64ecd240ae51b2cf9971e97750a9ce6a58b934586422b7595cc55cadc1ae9167 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180005350(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x18000537b;
  FUN_180005424((PCONTEXT)&DAT_180022ca0);
  _DAT_180022c10 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180022d38 = puVar3 + 0x40;
  _DAT_180022d20 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180022c00 = 0xc0000409;
  _DAT_180022c04 = 1;
  _DAT_180022c18 = 1;
  DAT_180022c20 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180022000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180022040;
  *(undefined8 *)(puVar3 + -8) = 0x18000541d;
  DAT_180022d98 = _DAT_180022c10;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_1800164d8);
  return;
}

