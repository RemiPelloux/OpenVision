
/* Address: 0x18000d8cc; Evidence: ev_9c41785f649a28a533938fe04bb606e5e1c805eeb4f6877959a73fcba126c5c6 */

void FUN_18000d8cc(ulonglong *param_1,undefined1 (*param_2) [32],ulonglong param_3,char *param_4,
                  longlong param_5,int param_6,char param_7,int param_8,int param_9,
                  longlong *param_10)

{
  undefined1 (*pauVar1) [32];
  int iVar2;
  undefined8 uVar3;
  ulonglong uVar4;
  undefined1 (*pauVar5) [32];
  int iVar6;
  bool bVar7;
  int local_18 [4];
  
  local_18[0] = 0;
  local_18[1] = 0;
  local_18[2] = 0;
  local_18[3] = 0;
  uVar3 = FUN_180012b6c(*param_1,param_6,0,local_18,param_4,param_5);
  bVar7 = local_18[0] == 0x2d;
  uVar4 = param_3 - bVar7;
  iVar6 = local_18[1] + -1;
  if (param_3 == 0xffffffffffffffff) {
    uVar4 = 0xffffffffffffffff;
  }
  iVar2 = FUN_1800125c8((undefined1 (*) [32])(*param_2 + bVar7),uVar4,param_6,local_18,(int)uVar3,
                        param_9,param_10);
  if (iVar2 == 0) {
    iVar2 = local_18[1] + -1;
    if ((iVar2 < -4) || (param_6 <= iVar2)) {
      FUN_18000d4c0(*param_2,param_3,param_6,param_7,param_8,local_18,1,param_10);
    }
    else {
      pauVar1 = (undefined1 (*) [32])(*param_2 + bVar7);
      if (iVar6 < iVar2) {
        do {
          pauVar5 = pauVar1;
          pauVar1 = (undefined1 (*) [32])(*pauVar5 + 1);
        } while ((*pauVar5)[0] != '\0');
        pauVar5[-1][0x1f] = 0;
      }
      FUN_18000d77c(param_2,param_3,param_6,local_18,'\x01',param_10);
    }
  }
  else {
    (*param_2)[0] = 0;
  }
  return;
}

