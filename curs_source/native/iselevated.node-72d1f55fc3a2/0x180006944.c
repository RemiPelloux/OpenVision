
/* Address: 0x180006944; Evidence: ev_f89baa7c8a2d52c5fde5fad893fc51df3e7506fff614f289c9acc7671ec1501f */

uint FUN_180006944(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}

