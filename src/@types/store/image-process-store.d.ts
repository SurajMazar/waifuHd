export interface ImageProcessFormInterface {
  image: File | null
  model: string
  de_noise: string
  up_scaling: string
  tile: string
  tta: string
  alpha_channel: string
}

export interface ImageProcessFormSetterInterface {
  setImage: (value: File | null) => void
  setModel: (value: string) => void
  setDeNoise: (value: string) => void
  setUpScaling: (value: string) => void
  setTile: (value: string) => void
  setTta: (value: string) => void
  setAlphaChannel: (value: string) => void
}
