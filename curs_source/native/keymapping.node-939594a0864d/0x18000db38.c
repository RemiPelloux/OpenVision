
/* Address: 0x18000db38; Evidence: ev_72678b77b98b24acc57508d96b1a5667be50cb25fd6f10fad7c3fdaef367c2cd */

undefined8
FUN_18000db38(double *param_1,undefined1 (*param_2) [32],ulonglong param_3,char *param_4,
             longlong param_5,int param_6,uint param_7,ulonglong param_8,
             __acrt_rounding_mode param_9,longlong *param_10)

{
  double dVar1;
  undefined8 uVar2;
  longlong lVar3;
  uint uVar4;
  __acrt_rounding_mode _Var5;
  byte bVar6;
  ulonglong uVar7;
  
  if (param_2 == (undefined1 (*) [32])0x0) {
    *(undefined1 *)(param_10 + 6) = 1;
    *(undefined4 *)((longlong)param_10 + 0x2c) = 0x16;
  }
  else {
    if (((param_3 != 0) && (param_4 != (char *)0x0)) && (param_5 != 0)) {
      if ((param_6 == 0x41) || (param_6 - 0x45U < 3)) {
        uVar4 = 1;
      }
      else {
        uVar4 = 0;
      }
      bVar6 = (byte)uVar4;
      if (((param_8 & 8) == 0) &&
         (dVar1 = *param_1, ((uint)((ulonglong)dVar1 >> 0x34) & 0x7ff) == 0x7ff)) {
        if (((ulonglong)dVar1 & 0xfffffffffffff) == 0) {
          lVar3 = 0;
        }
        else if (((longlong)dVar1 < 0) && (((ulonglong)dVar1 & 0xfffffffffffff) == 0x8000000000000))
        {
          lVar3 = 0xc;
        }
        else {
          lVar3 = (-(ulonglong)(((ulonglong)dVar1 & 0x8000000000000) != 0) & 0xfffffffffffffffc) + 8
          ;
        }
        if (param_3 < 4U - ((longlong)dVar1 >> 0x3f)) {
          (*param_2)[0] = 0;
          return 0xc;
        }
        uVar7 = 0xffffffffffffffff;
        if ((longlong)dVar1 < 0) {
          (*param_2)[0] = 0x2d;
          param_2 = (undefined1 (*) [32])(*param_2 + 1);
          (*param_2)[0] = 0;
          if (param_3 != 0xffffffffffffffff) {
            param_3 = param_3 - 1;
          }
        }
        uVar4 = (uVar4 ^ 1) * 2;
        do {
          uVar7 = uVar7 + 1;
        } while ((&PTR_DAT_18001b860)[(ulonglong)uVar4 + lVar3][uVar7] != '\0');
        uVar2 = FUN_18000b510((char *)param_2,param_3,
                              (longlong)
                              (&PTR_DAT_18001b860)[(ulonglong)(uVar4 + (param_3 <= uVar7)) + lVar3])
        ;
        if ((int)uVar2 == 0) {
          return 0;
        }
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      uVar4 = (uint)(param_8 >> 4);
      _Var5 = -(uint)((param_8 & 0x20) != 0) & param_9;
      if (param_6 != 0x41) {
        if (param_6 == 0x45) {
LAB_18000dd85:
          uVar2 = FUN_18000d3bc((ulonglong *)param_1,*param_2,param_3,param_4,param_5,param_7,bVar6,
                                uVar4 & 1 | 2,_Var5,param_10);
          return uVar2;
        }
        if (param_6 == 0x46) {
LAB_18000dd54:
          uVar2 = FUN_18000d6a4((ulonglong *)param_1,param_2,param_3,param_4,param_5,param_7,_Var5,
                                param_10);
          return uVar2;
        }
        if (param_6 != 0x47) {
          if (param_6 == 0x61) goto LAB_18000ddbf;
          if (param_6 == 0x65) goto LAB_18000dd85;
          if (param_6 == 0x66) goto LAB_18000dd54;
        }
        uVar2 = FUN_18000d8cc((ulonglong *)param_1,param_2,param_3,param_4,param_5,param_7,bVar6,
                              uVar4 & 1 | 2,_Var5,param_10);
        return uVar2;
      }
LAB_18000ddbf:
      uVar2 = FUN_18000d028(param_1,(undefined1 (*) [16])param_2,param_3,param_4,param_5,param_7,
                            bVar6,uVar4 & 1 | 2,_Var5,param_10);
      return uVar2;
    }
    *(undefined1 *)(param_10 + 6) = 1;
    *(undefined4 *)((longlong)param_10 + 0x2c) = 0x16;
  }
  FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,param_10);
  return 0x16;
}

