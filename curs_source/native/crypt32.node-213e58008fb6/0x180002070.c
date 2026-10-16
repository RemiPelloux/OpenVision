
/* Address: 0x180002070; Evidence: ev_39a89fc3ea0cf5944e849ef15863bc80e58016d6ce0b5dd62849250f601ece3f */

void FUN_180002070(undefined8 *param_1)

{
  if (param_1[1] != 0) {
    if (*(char *)(param_1 + 2) == '\0') {
      napi_delete_reference(*param_1);
    }
    param_1[1] = 0;
  }
  return;
}

