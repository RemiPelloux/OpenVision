
/* Address: 0x180006d74; Evidence: ev_1acf10dd359b23aa257054ba2d618b4e0df8cf69c5e781db7016011c151431aa */

uint FUN_180006d74(char *param_1,longlong param_2,undefined8 param_3,uint param_4)

{
  int iVar1;
  DWORD DVar2;
  LPVOID pvVar3;
  __acrt_ptd *p_Var4;
  uint uVar5;
  ulonglong uVar6;
  bool bVar7;
  
  if (param_1 == (char *)0x0) {
    if (*(char *)(param_2 + 0x28) != '\0') {
      FUN_180006d00(*(LPVOID *)(param_2 + 0x10));
      *(undefined1 *)(param_2 + 0x28) = 0;
    }
    *(undefined8 *)(param_2 + 0x10) = 0;
    *(undefined8 *)(param_2 + 0x18) = 0;
  }
  else {
    if (*param_1 != '\0') {
      iVar1 = FUN_180008628(param_4,9);
      uVar6 = (ulonglong)iVar1;
      if (iVar1 != 0) {
        if (*(ulonglong *)(param_2 + 0x18) < uVar6) {
          if (*(char *)(param_2 + 0x28) != '\0') {
            FUN_180006d00(*(LPVOID *)(param_2 + 0x10));
            *(undefined1 *)(param_2 + 0x28) = 0;
          }
          pvVar3 = _malloc_base(uVar6 * 2);
          *(LPVOID *)(param_2 + 0x10) = pvVar3;
          uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
          if (pvVar3 != (LPVOID)0x0) {
            uVar5 = 0;
          }
          *(bool *)(param_2 + 0x28) = pvVar3 != (LPVOID)0x0;
          *(ulonglong *)(param_2 + 0x18) = -(ulonglong)(pvVar3 != (LPVOID)0x0) & uVar6;
          if (uVar5 != 0) {
            return uVar5;
          }
        }
        iVar1 = FUN_180008628(param_4,9);
        if ((longlong)iVar1 != 0) {
          *(longlong *)(param_2 + 0x20) = (longlong)iVar1 + -1;
          return 0;
        }
      }
      DVar2 = GetLastError();
      FUN_1800062e0(DVar2);
      p_Var4 = FUN_180006350();
      return *(uint *)p_Var4;
    }
    if (*(longlong *)(param_2 + 0x18) == 0) {
      if (*(char *)(param_2 + 0x28) != '\0') {
        FUN_180006d00(*(LPVOID *)(param_2 + 0x10));
        *(undefined1 *)(param_2 + 0x28) = 0;
      }
      pvVar3 = _malloc_base(2);
      *(LPVOID *)(param_2 + 0x10) = pvVar3;
      bVar7 = pvVar3 != (LPVOID)0x0;
      uVar5 = ~-(uint)(pvVar3 != (LPVOID)0x0) & 0xc;
      if (bVar7) {
        uVar5 = 0;
      }
      *(bool *)(param_2 + 0x28) = bVar7;
      *(ulonglong *)(param_2 + 0x18) = (ulonglong)bVar7;
      if (uVar5 != 0) {
        return uVar5;
      }
    }
    **(undefined2 **)(param_2 + 0x10) = 0;
  }
  *(undefined8 *)(param_2 + 0x20) = 0;
  return 0;
}

