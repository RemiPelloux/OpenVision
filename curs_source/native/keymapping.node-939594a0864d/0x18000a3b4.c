
/* Address: 0x18000a3b4; Evidence: ev_e874d2a7eef0e868c7e4fcfabeba8b25b60a0e105d60bef85adca04186f4f40d */

void FUN_18000a3b4(longlong *param_1,byte *param_2,int param_3,int *param_4,longlong param_5)

{
  undefined8 uVar1;
  ulonglong uVar2;
  byte *pbVar3;
  
  pbVar3 = param_2 + param_3;
  uVar1 = *(undefined8 *)(param_5 + 0x2c);
  do {
    if (param_2 == pbVar3) {
LAB_18000a466:
      *(undefined8 *)(param_5 + 0x2c) = uVar1;
      return;
    }
    if ((((*(uint *)(*param_1 + 0x14) >> 0xc & 1) == 0) || (*(longlong *)(*param_1 + 8) != 0)) &&
       (uVar2 = FUN_18000e624(*param_2,(FILE *)*param_1,param_5), (int)uVar2 == -1)) {
      if ((*(char *)(param_5 + 0x30) == '\0') || (*(int *)(param_5 + 0x2c) != 0x2a)) {
        *param_4 = -1;
        goto LAB_18000a466;
      }
      if ((((*(uint *)(*param_1 + 0x14) >> 0xc & 1) != 0) && (*(longlong *)(*param_1 + 8) == 0)) ||
         (uVar2 = FUN_18000e624(0x3f,(FILE *)*param_1,param_5), (int)uVar2 != -1))
      goto LAB_18000a452;
      *param_4 = -1;
    }
    else {
LAB_18000a452:
      *param_4 = *param_4 + 1;
    }
    param_2 = param_2 + 1;
  } while( true );
}

