
/* Address: 0x180003e00; Evidence: ev_cbc8b80fa0c7440ba67e6b6124396190bbbf7b5d21f5064ea48f3f6549cfe1a7 */

undefined8 * FUN_180003e00(undefined8 *param_1,undefined8 param_2,undefined1 (*param_3) [32])

{
  ulonglong uVar1;
  ulonglong uVar2;
  ulonglong uVar3;
  ulonglong uVar4;
  void *pvVar5;
  ulonglong uVar6;
  char *pcVar7;
  
  uVar3 = *(ulonglong *)(*param_3 + 0x10);
  if (0x7fffffffffffffff - uVar3 < 0x32) {
                    /* WARNING: Subroutine does not return */
    FUN_180001160();
  }
  if (0xf < *(ulonglong *)(*param_3 + 0x18)) {
    param_3 = *(undefined1 (**) [32])*param_3;
  }
  uVar1 = uVar3 + 0x32;
  *param_1 = 0;
  param_1[1] = 0;
  uVar6 = 0xf;
  param_1[2] = 0;
  param_1[3] = 0;
  pcVar7 = (char *)param_1;
  if (uVar1 < 0x10) goto LAB_180003eec;
  uVar6 = uVar1 | 0xf;
  if (uVar6 < 0x8000000000000000) {
    if (uVar6 < 0x16) {
      uVar6 = 0x16;
    }
    uVar2 = uVar6 + 1;
    if (uVar2 == 0) {
      pcVar7 = (char *)0x0;
    }
    else {
      if (0xfff < uVar2) {
        uVar4 = uVar6 + 0x28;
        if (uVar4 <= uVar2) {
                    /* WARNING: Subroutine does not return */
          FUN_180001140();
        }
        goto code_r0x000180003e8e;
      }
      pcVar7 = operator_new(uVar2);
    }
  }
  else {
    uVar6 = 0x7fffffffffffffff;
    uVar4 = 0x8000000000000027;
code_r0x000180003e8e:
    pvVar5 = operator_new(uVar4);
    if (pvVar5 == (void *)0x0) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    pcVar7 = (char *)((longlong)pvVar5 + 0x27U & 0xffffffffffffffe0);
    *(void **)(pcVar7 + -8) = pvVar5;
  }
  *param_1 = pcVar7;
LAB_180003eec:
  param_1[2] = uVar1;
  param_1[3] = uVar6;
  builtin_strncpy(pcVar7,"System\\CurrentControlSet\\Control\\Keyboard Layouts\\",0x32);
  FUN_180017e30((undefined1 (*) [32])(pcVar7 + 0x32),param_3,uVar3);
  pcVar7[uVar1] = '\0';
  return param_1;
}

