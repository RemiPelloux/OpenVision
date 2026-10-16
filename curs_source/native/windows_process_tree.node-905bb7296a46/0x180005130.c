
/* Address: 0x180005130; Evidence: ev_62808174b1b20acffaa1e3441c62f2a66a4fdbf1bbce1bdeebe9f77b5814415f */

undefined8 * FUN_180005130(undefined8 *param_1,undefined8 *param_2)

{
  undefined8 *puVar1;
  undefined8 *puVar2;
  undefined8 uVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  longlong lVar6;
  
  lVar6 = 2;
  puVar4 = param_2;
  puVar5 = param_1;
  do {
    puVar1 = puVar5 + 0x10;
    uVar3 = puVar4[1];
    puVar2 = puVar4 + 0x10;
    *puVar5 = *puVar4;
    puVar5[1] = uVar3;
    uVar3 = puVar4[3];
    puVar5[2] = puVar4[2];
    puVar5[3] = uVar3;
    uVar3 = puVar4[5];
    puVar5[4] = puVar4[4];
    puVar5[5] = uVar3;
    uVar3 = puVar4[7];
    puVar5[6] = puVar4[6];
    puVar5[7] = uVar3;
    uVar3 = puVar4[9];
    puVar5[8] = puVar4[8];
    puVar5[9] = uVar3;
    uVar3 = puVar4[0xb];
    puVar5[10] = puVar4[10];
    puVar5[0xb] = uVar3;
    uVar3 = puVar4[0xd];
    puVar5[0xc] = puVar4[0xc];
    puVar5[0xd] = uVar3;
    uVar3 = puVar4[0xf];
    puVar5[0xe] = puVar4[0xe];
    puVar5[0xf] = uVar3;
    lVar6 = lVar6 + -1;
    puVar4 = puVar2;
    puVar5 = puVar1;
  } while (lVar6 != 0);
  *(undefined4 *)puVar1 = *(undefined4 *)puVar2;
  *(undefined4 *)((longlong)param_1 + 0x104) = *(undefined4 *)((longlong)param_2 + 0x104);
  *(undefined4 *)(param_1 + 0x21) = *(undefined4 *)(param_2 + 0x21);
  *(undefined4 *)((longlong)param_1 + 0x10c) = *(undefined4 *)((longlong)param_2 + 0x10c);
  param_1[0x22] = 0;
  param_1[0x23] = 0;
  param_1[0x24] = 0;
  param_1[0x25] = 0;
  uVar3 = param_2[0x23];
  param_1[0x22] = param_2[0x22];
  param_1[0x23] = uVar3;
  uVar3 = param_2[0x25];
  param_1[0x24] = param_2[0x24];
  param_1[0x25] = uVar3;
  *(undefined1 *)(param_2 + 0x22) = 0;
  param_2[0x24] = 0;
  param_2[0x25] = 0xf;
  return param_1;
}

