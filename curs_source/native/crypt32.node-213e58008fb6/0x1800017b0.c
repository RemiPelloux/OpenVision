
/* Address: 0x1800017b0; Evidence: ev_6d9b46df9ec8c56fef24d41cdc50dfc10a1827c06e62d73c8599af2b9485f6de */

void FUN_1800017b0(undefined8 param_1,undefined8 param_2)

{
  code *pcVar1;
  
  napi_fatal_error(param_1,0xffffffffffffffff,param_2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

