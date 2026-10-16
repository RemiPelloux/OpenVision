
/* Address: 0x180008f98; Evidence: ev_1caeeac5b4775dc8854b5c610120d4e2f607b023329137e78a4162e09039d954 */

void FUN_180008f98(longlong param_1,ulonglong param_2)

{
  ulonglong uVar1;
  char *pcVar2;
  longlong lVar3;
  char *pcVar4;
  
  lVar3 = *(longlong *)(param_1 + 0x458);
  if (lVar3 == 0) {
    uVar1 = 0x200;
    lVar3 = param_1 + 0x50;
  }
  else {
    uVar1 = *(ulonglong *)(param_1 + 0x450) >> 1;
  }
  pcVar2 = (char *)(lVar3 + -1 + uVar1);
  *(char **)(param_1 + 0x40) = pcVar2;
  pcVar4 = pcVar2;
  for (; (0 < *(int *)(param_1 + 0x30) || (param_2 != 0)); param_2 = param_2 >> 3) {
    *(int *)(param_1 + 0x30) = *(int *)(param_1 + 0x30) + -1;
    *pcVar4 = ((byte)param_2 & 7) + 0x30;
    *(longlong *)(param_1 + 0x40) = *(longlong *)(param_1 + 0x40) + -1;
    pcVar4 = *(char **)(param_1 + 0x40);
  }
  *(int *)(param_1 + 0x48) = (int)pcVar2 - *(int *)(param_1 + 0x40);
  *(char **)(param_1 + 0x40) = pcVar4 + 1;
  return;
}

